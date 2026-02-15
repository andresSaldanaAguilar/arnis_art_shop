import { useEffect, useState } from "react";
import { ItemProps } from "../interfaces/ItemProps";
import { fetchItems } from "../services/googleSheetsService.ts";

interface UseItemsResult {
  items: ItemProps[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook that fetches item data from the published Google Sheet on mount.
 * Returns items, loading state, and any error message.
 */
export function useItems(): UseItemsResult {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchItems();
        if (!cancelled) {
          setItems(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Error desconocido al cargar artículos"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { items, loading, error };
}
