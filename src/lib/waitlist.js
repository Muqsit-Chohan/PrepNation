// Google Apps Script web app that appends sign-ups to a Google Sheet.
// See waitlist/google-apps-script.gs for setup.
const WAITLIST_URL = import.meta.env.VITE_WAITLIST_URL;

export async function joinWaitlist(email) {
  if (!WAITLIST_URL) {
    throw new Error('VITE_WAITLIST_URL is not configured');
  }

  // Apps Script responds via a cross-origin redirect without CORS headers, so the
  // request is sent as a simple form POST in no-cors mode. The response can't be
  // read, but network failures still reject.
  await fetch(WAITLIST_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams({
      email: email.trim(),
      source: window.location.href,
      userAgent: navigator.userAgent,
    }),
  });
}
