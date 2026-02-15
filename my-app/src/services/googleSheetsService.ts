import Papa from "papaparse";
import { ItemProps } from "../interfaces/ItemProps";
import { GOOGLE_SHEET_ID, getGoogleDriveImageUrl } from "../config.ts";

/** Raw row shape coming from the CSV (all values are strings). */
interface SheetRow {
  title: string;
  description: string;
  cost: string;
  material: string;
  dimensions: string;
  disponible: string;
  category: string;
  imageFileId: string;
  purchaseLink?: string;
}

/**
 * Fetch all items from the published Google Sheet (CSV export).
 * No API key required — the sheet must be "Published to the web".
 */
export async function fetchItems(): Promise<ItemProps[]> {
  // Use the Visualization API endpoint — works with regular "Anyone with the link" sharing,
  // supports CORS, and does NOT require "Publish to web".
  const csvUrl = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv`;

  const response = await fetch(csvUrl);
  if (!response.ok) {
    throw new Error(
      `Error al obtener datos del spreadsheet (HTTP ${response.status})`
    );
  }

  const csvText = await response.text();

  const { data, errors } = Papa.parse<SheetRow>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  if (errors.length > 0) {
    console.warn("CSV parse warnings:", errors);
  }

  // Map each CSV row to our ItemProps interface
  return data
    .filter((row) => row.title && row.title.trim() !== "")
    .map((row): ItemProps => ({
      image: row.imageFileId
        ? getGoogleDriveImageUrl(row.imageFileId.trim())
        : "",
      title: row.title.trim(),
      description: (row.description || "").trim(),
      cost: Number(row.cost) || 0,
      material: (row.material || "").trim(),
      dimensions: (row.dimensions || "").trim(),
      disponible: (row.disponible || "").toUpperCase() === "TRUE",
      category: (row.category || "").trim(),
      purchaseLink: (row.purchaseLink || "").trim() || undefined,
    }));
}
