self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === "/track" && event.request.method === "POST") {
    event.respondWith(
      (async () => {
        try {
          const data = await event.request.clone().json();

          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyonJ_L8EMs2Vpt10RAAscqqcikuYISZj0D5x8bdrvgVF2vzQm8-LZyG04Oz3U7Y0Nq/exec",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            }
          );

          const text = await response.text();

          return new Response(
            JSON.stringify({ status: "ok", response: text }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (err) {
          console.error("🚨 Error al reenviar a GAS:", err);
          return new Response(
            JSON.stringify({ status: "error", message: err.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      })()
    );
  }
});
