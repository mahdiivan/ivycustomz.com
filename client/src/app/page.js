// client/src/app/page.js
export default function Home() {
  const videos = [
    { id: "v1", mp4: "/hero.mp4", webm: "/hero.webm", poster: "/hero-car.jpg", aspect: "16/9" },
    { id: "v2", mp4: "/video2.mp4", webm: "/video2.webm", poster: "/poster2.jpg", aspect: "9/16" }, // portrait
    { id: "v3", mp4: "/video3.mp4", webm: "/video3.webm", poster: "/poster3.jpg", aspect: "16/9" },
    { id: "v4", mp4: "/video4.mp4", webm: "/video4.webm", poster: "/poster4.jpg", aspect: "16/9" },
    { id: "v5", mp4: "/video5.mp4", webm: "/video5.webm", poster: "/poster5.jpg", aspect: "16/9" },
  ];

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Top bar */}
      <div
        style={{
          background: "#0f0f0f",
          textAlign: "center",
          fontSize: "12px",
          padding: "6px 0",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "1px solid #222",
        }}
      >
        Specialized in Custom Automotive Lighting
      </div>

      {/* Header */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Ivy Customz" width={140} height={60} style={{ objectFit: "contain" }} />
        </div>
        <nav style={{ display: "none", gap: "32px", fontWeight: 600, fontSize: "14px" }}>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Shop Products
          </a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Shop by Area
          </a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Bundle & Save
          </a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Shop by Vehicle
          </a>
          <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
            Info
          </a>
        </nav>
        <div>
          <button
            aria-label="menu"
            style={{ background: "#222", border: "none", padding: "8px 12px", color: "#fff", borderRadius: "4px" }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* background image + overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-car.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 2,
          }}
        />

        {/* content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "900px",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ textTransform: "uppercase", letterSpacing: "1px", fontSize: "14px", color: "#ccc" }}>
            Premium Multicolor Lighting Service
          </div>
          <h1 style={{ margin: 0, fontSize: "64px", fontWeight: 800, lineHeight: 1.1 }}>Dominate the Night</h1>
          <p style={{ margin: 0, fontSize: "18px", maxWidth: "700px", color: "#e5e5e5" }}>
            Custom automotive lighting built from scratch—bold, eye-catching, and uniquely yours.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "center" }}>
            <a
              href="#"
              style={{
                background: "#e01f1f",
                padding: "14px 28px",
                color: "#fff",
                fontWeight: "700",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "1px",
                display: "inline-block",
              }}
            >
              The Look Starts Here.
            </a>
            <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc" }}>
              ← Check out our Products
            </div>
          </div>
        </div>
      </section>

    {/* Our Work / Custom layout gallery */}
<section id="work" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
  <div style={{ textAlign: "center", marginBottom: "32px" }}>
    <h2 style={{ fontSize: "36px", margin: 0, fontWeight: 700 }}>Check Out Our Work</h2>
    <p style={{ marginTop: "8px", color: "#aaa" }}>
      See how custom lighting transforms rides—dynamic, clean, and built to stand out.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gap: "32px",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "repeat(2, auto)",
      gridTemplateAreas: `
        "v1 v2 v3"
        "v4 v2 v5"
      `,
      alignItems: "start",
    }}
  >
    {/* v1 top-left */}
    <div
      style={{
        gridArea: "v1",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#111",
        boxShadow: "0 30px 60px -10px rgba(0,0,0,0.5)",
        aspectRatio: "16 / 9",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-car.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </div>

    {/* v2 portrait middle (spanning both rows) */}
    <div
      style={{
        gridArea: "v2",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#111",
        boxShadow: "0 30px 60px -10px rgba(0,0,0,0.5)",
        aspectRatio: "9 / 16",
        minHeight: "500px",
        justifySelf: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster2.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src="/video2.webm" type="video/webm" />
        <source src="/video2.mp4" type="video/mp4" />
      </video>
    </div>

    {/* v3 top-right */}
    <div
      style={{
        gridArea: "v3",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#111",
        boxShadow: "0 30px 60px -10px rgba(0,0,0,0.5)",
        aspectRatio: "16 / 9",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster3.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src="/video3.webm" type="video/webm" />
        <source src="/video3.mp4" type="video/mp4" />
      </video>
    </div>

    {/* v4 bottom-left */}
    <div
      style={{
        gridArea: "v4",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#111",
        boxShadow: "0 30px 60px -10px rgba(0,0,0,0.5)",
        aspectRatio: "16 / 9",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster4.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src="/video4.webm" type="video/webm" />
        <source src="/video4.mp4" type="video/mp4" />
      </video>
    </div>

    {/* v5 bottom-right */}
    <div
      style={{
        gridArea: "v5",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#111",
        boxShadow: "0 30px 60px -10px rgba(0,0,0,0.5)",
        aspectRatio: "16 / 9",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster5.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <source src="/video5.webm" type="video/webm" />
        <source src="/video5.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</section>

      {/* Contact */}
      <div id="contact" style={{ background: "#0f0f0f", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", margin: "0 0 8px", fontWeight: 700 }}>Get in Touch</h2>
          <p style={{ margin: 0, color: "#aaa" }}>
            Questions about a build or lighting setup? Reach out at{" "}
            <a href="mailto:info@ivycustomz.com" style={{ color: "#fff", textDecoration: "underline" }}>
              info@ivycustomz.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
