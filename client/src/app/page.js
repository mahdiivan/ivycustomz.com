// client/src/app/products/page.js
const products = [
  {
    id: "light-001",
    name: "Custom LED Headlight",
    price: 79.99,
    description: "Bright, durable, and customizable automotive LED headlight.",
    image: "/placeholder.jpg", // you can drop a placeholder image in /public
  },
  {
    id: "light-002",
    name: "Underglow Kit",
    price: 49.99,
    description: "RGB underglow kit with remote control.",
    image: "/placeholder.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shop Ivy Customz</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map(p => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-sm text-gray-500">Image</span>
            </div>
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">{p.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-bold">${p.price.toFixed(2)}</span>
              <button className="px-4 py-2 bg-black text-white rounded">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
