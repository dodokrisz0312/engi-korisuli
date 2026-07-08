"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, Settings, X } from "lucide-react";

type CookieConsentValue = {
  necessary: true;
  analytics: boolean;
};

const STORAGE_KEY = "engi-cookie-consent";

function saveConsent(value: CookieConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event("engi-cookie-consent-updated"));
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setIsVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored) as CookieConsentValue;
      setAnalyticsEnabled(Boolean(parsed.analytics));
    } catch {
      setIsVisible(true);
    }
  }, []);

  function acceptAll() {
    saveConsent({
      necessary: true,
      analytics: true,
    });

    setIsVisible(false);
  }

  function rejectOptional() {
    saveConsent({
      necessary: true,
      analytics: false,
    });

    setIsVisible(false);
  }

  function saveSelected() {
    saveConsent({
      necessary: true,
      analytics: analyticsEnabled,
    });

    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent" role="dialog" aria-modal="true" aria-label="Süti beállítások">
      <div className="cookie-card">
        <button
          className="cookie-close"
          type="button"
          aria-label="Süti banner bezárása"
          onClick={rejectOptional}
        >
          <X size={18} />
        </button>

        <div className="cookie-icon">
          <Cookie size={30} aria-hidden="true" />
        </div>

        <div className="cookie-content">
          <p className="cookie-eyebrow">Süti beállítások</p>
          <h2>Sütiket használunk</h2>

          <p>
            A weboldal működéséhez szükséges sütiket mindig használjuk. A statisztikai sütiket,
            például a Google Analytics-et, csak hozzájárulás esetén kapcsoljuk be.
          </p>

          {showSettings && (
            <div className="cookie-settings">
              <label className="cookie-option disabled">
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Szükséges sütik</strong>
                  <small>
                    Ezek a weboldal alapvető működéséhez kellenek, ezért nem kapcsolhatók ki.
                  </small>
                </span>
              </label>

              <label className="cookie-option">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                />
                <span>
                  <strong>Statisztikai sütik</strong>
                  <small>
                    Segítenek megérteni, hogyan használják a látogatók az oldalt. Ide tartozik a
                    Google Analytics.
                  </small>
                </span>
              </label>
            </div>
          )}

          <Link href="/adatvedelmi-tajekoztato" className="cookie-policy-link">
            Adatvédelmi és süti tájékoztató
          </Link>
        </div>

        <div className="cookie-actions">
          <button className="btn secondary" type="button" onClick={rejectOptional}>
            Elutasítom
          </button>

          <button
            className="btn secondary cookie-settings-button"
            type="button"
            onClick={() => setShowSettings((current) => !current)}
          >
            <Settings size={17} />
            Beállítások
          </button>

          {showSettings ? (
            <button className="btn primary" type="button" onClick={saveSelected}>
              Mentés
            </button>
          ) : (
            <button className="btn primary" type="button" onClick={acceptAll}>
              Elfogadom
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
