// utils/analytics.js

const MEASUREMENT_ID = "G-GXPH1CHY3M";

export function initAnalytics() {
  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());

  window.gtag('config', MEASUREMENT_ID, {
    debug_mode: true
  });
}

export function trackPageView(page) {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_title: page,
    page_location: window.location.href
  });

  console.log(`GA4: page_view ${page}`);
}

export function trackAddToCart(product) {
  if (!window.gtag) return;

  window.gtag('event', 'add_to_cart', {
    item_name: product.name
  });

  console.log(`GA4: add_to_cart ${product.name}`);
}