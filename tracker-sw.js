self.addEventListener("install", (event) => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  clients.claim();
});

self.addEventListener("message", async (event) => {
  if (event.data?.action !== "track") return;

  try {
    const data = event.data;

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyonJ_L8EMs2Vpt10RAAscqqcikuYISZj0D5x8bdrvgVF2vzQm8-LZyG04Oz3U7Y0Nq/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const text = await response.text();
    console.log("📊 Tracking reenviado a GAS desde SW:", text);
  } catch (err) {
    console.error("🚨 Error en SW al reenviar a GAS:", err);
  }
});
