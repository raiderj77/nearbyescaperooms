'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = 'nearbyescaperooms:analytics-consent';
const SCRIPT_ID = 'google-analytics-script';

type ConsentChoice = 'granted' | 'denied';
type GtagArguments = [command: string, action: string | Date, params?: Record<string, unknown>];
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: GtagArguments) => void;
};

function analyticsWindow(): AnalyticsWindow {
  return window as AnalyticsWindow;
}

function initializeConsentMode() {
  const currentWindow = analyticsWindow();
  currentWindow.dataLayer = currentWindow.dataLayer || [];
  currentWindow.gtag =
    currentWindow.gtag ||
    ((...args: GtagArguments) => {
      currentWindow.dataLayer?.push(args);
    });

  currentWindow.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
  });
}

function updateAnalyticsConsent(choice: ConsentChoice) {
  analyticsWindow().gtag?.('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: choice,
  });
}

function clearAnalyticsCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (name === '_ga' || name?.startsWith('_ga_')) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.nearbyescaperooms.com; SameSite=Lax`;
    }
  });
}

function hasPrivacySignal() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true ||
    navigator.doNotTrack === '1';
}

const buttonStyle: CSSProperties = {
  minHeight: 44, borderRadius: 12, border: '1px solid var(--crimson)',
  background: 'var(--void)', color: 'white', padding: '0.65rem 1rem',
  fontFamily: 'var(--font-body)', fontWeight: 600, cursor: 'pointer',
};

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID?.trim()) return;
    initializeConsentMode();

    let savedChoice: ConsentChoice | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      savedChoice = stored === 'granted' || stored === 'denied' ? stored : null;
    } catch {
      savedChoice = null;
    }

    const privacySignal = hasPrivacySignal();
    const initialChoice = privacySignal ? 'denied' : savedChoice;

    setChoice(initialChoice);
    if (initialChoice === 'granted') {
      updateAnalyticsConsent('granted');
      loadGoogleAnalytics();
    } else if (initialChoice === 'denied') {
      updateAnalyticsConsent('denied');
      clearAnalyticsCookies();
    } else {
      setShowChoices(true);
    }

  }, []);

  const saveChoice = (requestedChoice: ConsentChoice) => {
    const nextChoice = hasPrivacySignal() ? 'denied' : requestedChoice;
    try {
      window.localStorage.setItem(STORAGE_KEY, nextChoice);
    } catch {
      // Consent remains effective for this page even if storage is unavailable.
    }
    setChoice(nextChoice);
    setShowChoices(false);
    updateAnalyticsConsent(nextChoice);
    if (nextChoice === 'granted') {
      loadGoogleAnalytics();
    } else {
      clearAnalyticsCookies();
      if (choice === 'granted') {
        window.location.reload();
      }
    }
  };

  if (!GA_MEASUREMENT_ID?.trim()) return null;

  if (!showChoices) {
    return (
      <button
        type="button"
        style={{ ...buttonStyle, position: 'fixed', bottom: 12, left: 12, zIndex: 1100, borderRadius: 999 }}
        onClick={() => setShowChoices(true)}
        aria-label={`Privacy choices. Analytics is currently ${choice || 'not selected'}.`}
      >
        Privacy choices
      </button>
    );
  }

  return (
    <section
      style={{ position: 'fixed', left: 12, right: 12, bottom: 12, margin: '0 auto', maxWidth: 760, maxHeight: 'calc(100dvh - 24px)', overflowY: 'auto', zIndex: 1100, borderRadius: 16, border: '1px solid var(--crimson)', background: 'var(--void)', color: 'white', padding: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.4)', fontFamily: 'var(--font-body)' }}
      aria-label="Analytics privacy choices"
      role="dialog"
      aria-modal="false"
    >
      <h2 style={{ fontSize: '1.1rem', margin: '0 0 8px', color: 'white' }}>Your analytics choice</h2>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 16px', color: '#d0d0d0' }}>
        We use Google Analytics only if you accept. It helps us count page views and see which pages are useful.
        Advertising and personalization stay off. Declining does not limit the site.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <a
          href="/privacy"
          style={{ ...buttonStyle, display: 'inline-flex', alignItems: 'center', color: 'white' }}
        >
          Privacy details
        </a>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => saveChoice('denied')}
        >
          Decline analytics
        </button>
        <button
          type="button"
          style={{ ...buttonStyle, background: 'var(--crimson)' }}
          onClick={() => saveChoice('granted')}
        >
          Accept analytics
        </button>
      </div>
    </section>
  );
}

function loadGoogleAnalytics() {
  const measurementId = GA_MEASUREMENT_ID?.trim();
  if (!measurementId) return;

  const currentWindow = analyticsWindow();
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  currentWindow.gtag?.('js', new Date());
  currentWindow.gtag?.('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

