/**
 * Minimal in-memory sliding-window rate limiter. Per-instance on serverless,
 * which is acceptable as a basic abuse brake alongside the honeypot and
 * time-to-submit checks.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((ts) => now - ts < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [k, timestamps] of hits) {
      if (timestamps.every((ts) => now - ts >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}
