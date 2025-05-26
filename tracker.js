if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/tracker-sw.js").then(() => {
    console.log("📡 Tracker Service Worker registrado");
  });
}

let sectionEntryTime = {};
let sectionExitTime = {};
let geoLocation = { city: "unknown", country: "unknown" };

// Aviso de privacidad (RGPD)
window.addEventListener("load", () => {
  const banner = document.createElement("div");
  banner.innerHTML = `
    <div style="position:fixed;bottom:0;left:0;right:0;background:#111;color:#fff;padding:10px;text-align:center;z-index:9999">
      Este sitio utiliza un sistema de análisis anónimo de secciones visitadas para mejorar la experiencia.
      <button style="margin-left:20px;background:#ff0;color:#000;padding:5px 10px;border:none;cursor:pointer" onclick="this.parentElement.remove()">Aceptar</button>
    </div>`;
  document.body.appendChild(banner);
});

// Intenta obtener ubicación aproximada (si el usuario da permiso)
navigator.geolocation?.getCurrentPosition(
  async (pos) => {
    const { latitude, longitude } = pos.coords;
    const res = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?json=1`
    );
    const data = await res.json();
    geoLocation = {
      city: data.city || "unknown",
      country: data.country || "unknown",
    };
  },
  () => {}, // fallo => no hacer nada
  { timeout: 5000 }
);

// Detectar secciones visibles
const observer = new IntersectionObserver(
  (entries) => {
    const now = Date.now();
    entries.forEach((entry) => {
      const id = entry.target.id;
      if (!id) return;

      if (entry.isIntersecting) {
        sectionEntryTime[id] = now;
      } else if (sectionEntryTime[id]) {
        sectionExitTime[id] = now;
        const durationMs = sectionExitTime[id] - sectionEntryTime[id];
        const durationSec = Math.round(durationMs / 1000);

        sendTrackingData(id, durationSec);
      }
    });
  },
  { threshold: 0.5 }
);

// Inicia observador en todas las secciones
document.querySelectorAll("main > section, section[id]").forEach((section) => {
  observer.observe(section);
});

// Enviar datos al SW
function sendTrackingData(section, duration) {
  const payload = {
    timestamp: new Date().toISOString(),
    section,
    duration_seconds: duration,
    userAgent: navigator.userAgent,
    city: geoLocation.city,
    country: geoLocation.country,
  };

  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      action: "track",
      ...payload,
    });
  }

  // Fallback si el SW no responde
  fetch("/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
