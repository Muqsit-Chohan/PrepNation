/**
 * Prep4Ever waitlist → Google Sheet.
 *
 * Setup (one time):
 *  1. Create a Google Sheet (e.g. "Prep4Ever Waitlist").
 *  2. Extensions → Apps Script, delete the sample code and paste this file.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me    |    Who has access: Anyone
 *  4. Copy the Web app URL (ends in /exec) into VITE_WAITLIST_URL in .env.local
 *     (and in your hosting provider's environment variables), then rebuild.
 *
 * After editing this script, use Deploy → Manage deployments → Edit → New version
 * so the same URL picks up the change.
 */

const SHEET_NAME = 'Waitlist';
// New columns go at the end so rows saved before Name/Phone existed stay aligned.
const HEADERS = ['Joined At', 'Email', 'Source', 'User Agent', 'Name', 'Phone'];

function doPost(e) {
  const params = (e && e.parameter) || {};
  const email = String(params.email || '').trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: 'invalid_email' });
  }

  const name = String(params.name || '').trim().slice(0, 100);
  const phone = String(params.phone || '').trim();
  if (!name) return json({ ok: false, error: 'invalid_name' });
  if (!/^\+?[0-9\s-]{10,16}$/.test(phone)) return json({ ok: false, error: 'invalid_phone' });

  // Serialise writes so two simultaneous sign-ups can't both pass the duplicate check.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existing = sheet.getRange(2, 2, lastRow - 1, 1).getValues().flat();
      if (existing.includes(email)) return json({ ok: true, duplicate: true });
    }

    sheet.appendRow([
      new Date(),
      email,
      String(params.source || '').slice(0, 100),
      String(params.userAgent || '').slice(0, 300),
      name,
      // Leading apostrophe keeps the number as text so Sheets doesn't drop the leading 0.
      "'" + phone,
    ]);
    return json({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  // Also upgrades a sheet created by the older version of this script.
  if (sheet.getLastColumn() < HEADERS.length) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
