// Minimal service worker — required for PWA installability.
// Network-first; we don't aggressively cache so updates ship instantly.
self.addEventListener('install',  e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  // pass-through; live app + Supabase always reach the network
});
