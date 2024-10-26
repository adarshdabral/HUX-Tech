import Image from 'next/image'

const products = [
  { name: "Chocolate Macchiato", price: 12.99, image: "/chocolate-macchiato.jpg" },
  { name: "Cold Brew Americano", price: 10.99, image: "/cold-brew-americano.jpg" },
  { name: "Vanilla Cappuccino", price: 11.99, image: "/vanilla-cappuccino.jpg" },
  { name: "Dark Chocolate Espresso", price: 13.99, image: "/dark-chocolate-espresso.jpg" },
]

export default function ProductGrid2() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-8 text-center">Highly recommended products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mb-4 rounded" />
              <h3 className="font-bold mb-2">{product.name}</h3>
              <p className="text-red-600 mb-4">${product.price}</p>
              <button className="bg-black text-white px-4 py-2 rounded w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}