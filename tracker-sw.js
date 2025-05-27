self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === "/track" && event.request.method === "POST") {
    event.respondWith(
      (async () => {
        try {
          const cloned = event.request.clone();
          const data = await cloned.json();

          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbyonJ_L8EMs2Vpt10RAAscqqcikuYISZj0D5x8bdrvgVF2vzQm8-LZyG04Oz3U7Y0Nq/exec",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            }
          );

          const txt = await res.text();
          return new Response(JSON.stringify({ status: "ok", msg: txt }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("🚨 Error al reenviar a GAS:", err);
          return new Response(
            JSON.stringify({ status: "error", err: err.message }),
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
