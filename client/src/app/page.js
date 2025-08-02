// client/src/app/page.js
export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
        {/* Top bar */}
        <div style={{ background: "#0f0f0f", textAlign: "center", fontSize: "12px", padding: "6px 0", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #222" }}>
          50,000+ builds and counting — nationwide
        </div>

        {/* Header */}
        <header style={{ position: "relative", zIndex: 10, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Ivy Customz" width={140} height={60} style={{ objectFit: "contain" }} />
          </div>
          <nav style={{ display: "none", gap: "32px", fontWeight: 600, fontSize: "14px" }} className="desktop-nav">
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Shop Products</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Shop by Area</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Bundle & Save</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Shop by Vehicle</a>
            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Info</a>
          </nav>
          <div>
            <button aria-label="menu" style={{ background: "#222", border: "none", padding: "8px 12px", color: "#fff", borderRadius: "4px" }}>
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
              Premium Multicolor Lighting Kits
            </div>
            <h1 style={{ margin: 0, fontSize: "64px", fontWeight: 800, lineHeight: 1.1 }}>
              Light Up Your Ride
            </h1>
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
                Let’s Glow. Let’s Go.
              </a>
              <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc" }}>
                Trusted by 50,000+ happy customers — rated 4.8/5
              </div>
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
