import Image from 'next/image'

const products = [
  { name: "SB Foods", price: "250kg", image: "/chocolate-macchiato.jpg" },
  { name: "Swister", price: "200kg", image: "/cold-brew-americano.jpg" },
  { name: "Chamelia Twigs", price: "190kg", image: "/vanilla-cappuccino.jpg" },
  { name: "Sea6 Energy", price: "2000kg", image: "/dark-chocolate-espresso.jpg" },
  { name: "Quontrac Industries", price: "150kg", image: "/chocolate-macchiato.jpg" },
  { name: "Stay Adapt", price: "300kg", image: "/cold-brew-americano.jpg" },
  { name: "Garg International", price: "375kg", image: "/vanilla-cappuccino.jpg" },
  { name: "Brew Craft", price: "750kg", image: "/dark-chocolate-espresso.jpg" },
]

export default function ProductGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mb-4 rounded" />
              <h3 className="font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              {/* <button className="bg-coffee-brown text-white px-4 py-2 rounded w-full">Add to Cart</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}