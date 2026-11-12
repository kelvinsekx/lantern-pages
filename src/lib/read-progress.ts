"use client";
import { useCallback, useSyncExternalStore } from "react";

// Reading progress lives in this browser only. Keys are article paths
// (e.g. "/learn/backend/node/015-auth-with-nest-mdx"), values are read timestamps.
const KEY = "lantern:read:v1";
const EVENT = "lantern:read-changed";

type ReadMap = Record<string, number>;

let cache: { raw: string | null; map: ReadMap } = { raw: null, map: {} };
const EMPTY: ReadMap = {};

function snapshot(): ReadMap {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === cache.raw) return cache.map;
    cache = { raw, map: raw ? (JSON.parse(raw) as ReadMap) : {} };
    return cache.map;
  } catch {
    return EMPTY;
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function markRead(path: string) {
  try {
    const map = snapshot();
    if (map[path]) return;
    localStorage.setItem(KEY, JSON.stringify({ ...map, [path]: Date.now() }));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    // storage unavailable (private mode, quota): progress just isn't saved
  }
}

export function useReadArticles(): ReadMap {
  return useSyncExternalStore(subscribe, snapshot, () => EMPTY);
}

export function useMarkRead() {
  return useCallback((path: string) => markRead(path), []);
}
