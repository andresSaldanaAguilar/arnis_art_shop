/** Google Sheet ID — from the spreadsheet URL */
export const GOOGLE_SHEET_ID =
  "1_8g0GAIgbWpbvofAiV-YOzS76aWBh-S2iZSC3Yo8So8";

/**
 * Build a direct image URL from a Google Drive file ID.
 * Uses the thumbnail endpoint with a large size — works reliably for
 * public Drive files, no redirects, no CORS issues.
 */
export function getGoogleDriveImageUrl(fileId: string): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

/**
 * Google Drive file ID for the sticker pack promo image.
 * Update this if the promo image changes in Drive.
 */
export const STICKER_PROMO_IMAGE_FILE_ID = "1GvvJIWGPKoo_c37UoT3vrrmqXXg4wOah";
