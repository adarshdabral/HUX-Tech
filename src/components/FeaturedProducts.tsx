import Image from 'next/image'

const featuredProducts = [
  { name: "Spray Dried", price: 875, image: "/colombian.jpg" },
  { name: "Freeze Dried", price: 925, image: "/caramel-macchiato.jpg" },
  { name: "Agglomerated", price: 970, image: "/cold-espresso.jpg" },
  { name: "Flavoured Instant Coffee", price: 1680, image: "/arabica-seasonal.jpg" },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Subscribe to our money saving monthly package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mb-4 rounded" />
              <h3 className="font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">Rs.{product.price}</p>
              {/* <button className="bg-coffee-brown text-white px-4 py-2 rounded w-full">Add to Cart</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}