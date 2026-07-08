"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type CookieConsent = {
  necessary: true;
  analytics: boolean;
};

function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem("engi-cookie-consent");
    return stored ? (JSON.parse(stored) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function GoogleAnalytics() {
  const consent = getStoredConsent();
  const analyticsAllowed = Boolean(consent?.analytics && GA_ID);

  useEffect(() => {
    function handleConsentUpdate() {
      window.location.reload();
    }

    window.addEventListener("engi-cookie-consent-updated", handleConsentUpdate);

    return () => {
      window.removeEventListener("engi-cookie-consent-updated", handleConsentUpdate);
    };
  }, []);

  if (!analyticsAllowed || !GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
