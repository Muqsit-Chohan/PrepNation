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
const HEADERS = ['Joined At', 'Email', 'Source', 'User Agent'];

function doPost(e) {
  const params = (e && e.parameter) || {};
  const email = String(params.email || '').trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: 'invalid_email' });
  }

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
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
