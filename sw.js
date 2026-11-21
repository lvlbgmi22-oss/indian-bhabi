/* Indian Bhabi Firebase Cloud Messaging service worker. Replace only the VAPID public key in index.html. */
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyDbkxXO00WVwB4QCGiLmoE5wlZnM4oCSPE",
  authDomain: "indian-bhabi-696aa.firebaseapp.com",
  projectId: "indian-bhabi-696aa",
  storageBucket: "indian-bhabi-696aa.firebasestorage.app",
  messagingSenderId: "618265959158",
  appId: "1:618265959158:web:6339f322dfcc10157fead7"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || "Indian Bhabi", {
    body: n.body || "You have a new update.",
    icon: "icon-192.png",
    data: { url: (payload.data && payload.data.url) || "/" }
  });
});
self.addEventListener("notificationclick", event => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url || "/";
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const client of list) if ("focus" in client) { client.navigate(url); return client.focus(); }
    return clients.openWindow(url);
  }));
});
