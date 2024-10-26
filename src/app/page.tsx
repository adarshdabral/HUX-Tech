import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Subscription from '@/components/Subscription'
import About from '@/components/About'
import ProductGrid from '@/components/ProductGrid'
import ImageSection from '@/components/ImageSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Subscription />
      <About />
      <ProductGrid />
      <ImageSection />
    </>
  )
}