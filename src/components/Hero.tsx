import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/img/herobg.jpeg"
        alt="Coffee cups"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Brewing Dreams</h1>
          <p className="text-xl mb-8">One cup at a time.</p>
          {/* <button className="bg-white text-coffee-brown px-6 py-3 rounded-full text-lg">Shop Now</button> */}
        </div>
      </div>
    </section>
  )
}