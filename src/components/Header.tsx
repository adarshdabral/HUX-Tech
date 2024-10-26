import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-coffee-brown text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold px-3">HUX Coffee Company</Link>
        <nav>
          {/* <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul> */}
        </nav>
      </div>
    </header>
  )
}