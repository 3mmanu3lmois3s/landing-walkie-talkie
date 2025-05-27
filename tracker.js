// === Registro del Service Worker ===
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/tracker-sw.js").then((reg) => {
    console.log("📡 Tracker Service Worker registrado:", reg);

    navigator.serviceWorker.ready.then(() => {
      console.log("✅ SW activo y controlando la página");
    });
  });
}

// === Variables de tiempo por sección ===
let sectionEntryTime = {};
let sectionExitTime = {};
let geoLocation = { city: "unknown", country: "unknown" };

// === Aviso RGPD ===
window.addEventListener("load", () => {
  const banner = document.createElement("div");
  banner.innerHTML = `
    <div style="position:fixed;bottom:0;left:0;right:0;background:#111;color:#fff;padding:10px;text-align:center;z-index:9999">
      Este sitio utiliza recolección anónima de la ubicación geográfica (ej. Madrid, España) y secciones visitadas para mejorar la experiencia.
      <button style="margin-left:20px;background:#ff0;color:#000;padding:5px 10px;border:none;cursor:pointer" onclick="this.parentElement.remove()">Aceptar</button>
    </div>`;
  document.body.appendChild(banner);
});

// === Geolocalización (opcional) ===
navigator.geolocation?.getCurrentPosition(
  async (pos) => {
    const { latitude, longitude } = pos.coords;
    try {
      const res = await fetch(
        `https://geocode.xyz/${latitude},${longitude}?json=1`
      );
      const data = await res.json();
      geoLocation = {
        city:
          data.city && !data.city.includes("Throttled") ? data.city : "unknown",
        country:
          data.country && !data.country.includes("Throttled")
            ? data.country
            : "unknown",
      };
    } catch (err) {
      console.warn("🌍 Fallo al obtener ubicación:", err);
    }
  },
  () => {}, // falló => no hacer nada
  { timeout: 5000 }
);

// === Observer para detectar sección visible ===
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

document.querySelectorAll("main > section, section[id]").forEach((section) => {
  observer.observe(section);
});

// === Envío de datos ===
function sendTrackingData(section, duration) {
  const payload = {
    timestamp: new Date().toISOString(),
    section,
    duration_seconds: duration,
    userAgent: navigator.userAgent,
    city: geoLocation.city,
    country: geoLocation.country,
  };

  // Enviar directamente a Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbyonJ_L8EMs2Vpt10RAAscqqcikuYISZj0D5x8bdrvgVF2vzQm8-LZyG04Oz3U7Y0Nq/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  )
    .then((res) => res.text())
    .then((txt) => console.log("📊 Tracking enviado a GAS:", txt))
    .catch((err) => console.error("🚨 Error al enviar a GAS:", err));
}
