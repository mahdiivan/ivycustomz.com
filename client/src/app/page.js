
import Image from "next/image";

const products = [
  {
    id: "led-headlight",
    name: "Lightning Bolt Headlights",
    price: 129.99,
    description: "Custom neon purple/blue bolt-pattern headlights that turn heads.",
    image: "/product1.jpg",
  },
  {
    id: "underglow",
    name: "Underglow Kit",
    price: 89.99,
    description: "RGB underglow lighting with controller and presets.",
    image: "/product2.jpg",
  },
  {
    id: "halo-rings",
    name: "Halo Ring Fog Lights",
    price: 59.99,
    description: "Bright halo rings for fogs with custom color options.",
    image: "/product3.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Ivy Customz" width={140} height={60} />
        </div>
        <div className="flex gap-6 font-medium">
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Custom Automotive Lighting, Built From Scratch
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Ivy Customz brings high-impact, neon-style lighting upgrades to your ride. Lightning bolt headlights, underglow, and more—designed and engineered for style and performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-md font-semibold shadow-lg transition"
            >
              See Products
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-car.jpg"
              alt="Custom car with lighting"
              width={700}
              height={420}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-48">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-300 mb-4 flex-1">{p.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg">${p.price.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md font-medium transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Ivy Customz</h4>
            <p className="text-sm text-gray-400">
              Custom automotive lighting and accessories. Built and deployed from scratch using modern web technologies.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Get in Touch</h4>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:info@ivycustomz.com" className="underline">
                info@ivycustomz.com
              </a>
            </p>
            <p className="text-sm mt-2">Follow on socials: Instagram / X (placeholders)</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} Ivy Customz. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
