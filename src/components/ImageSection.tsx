import Image from 'next/image'

export default function ImageSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src="/img/ef.jpg" alt="Coffee beans" width={500} height={500} className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Flavored coffee from a fine roaster's coffee beans.</h2>
            <p className="mb-4">Experience the rich, aromatic flavors of our carefully selected coffee beans, roasted to perfection by our expert roasters.</p>
            <button className="bg-coffee-brown text-white px-6 py-3 rounded-full text-lg">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}