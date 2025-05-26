self.addEventListener("message", async (event) => {
  if (event.data?.action === "track") {
    const payload = {
      timestamp: event.data.timestamp,
      section: event.data.section,
      duration_seconds: event.data.duration_seconds,
      userAgent: event.data.userAgent,
      city: event.data.city,
      country: event.data.country,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyonJ_L8EMs2Vpt10RAAscqqcikuYISZj0D5x8bdrvgVF2vzQm8-LZyG04Oz3U7Y0Nq/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    } catch (err) {
      console.error("Tracker SW Error:", err);
    }
  }
});
