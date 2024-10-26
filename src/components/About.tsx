export default function About() {
    return (
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why HUX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold mb-2">Fresh Aroma Every Glass</h3>
              <p>Experience the rich aroma of freshly roasted coffee beans in every sip.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Fine Roasted</h3>
              <p>Our expert roasters bring out the best flavors in every bean.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Signature Blends</h3>
              <p>Discover unique flavor profiles with our carefully crafted signature blends.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }