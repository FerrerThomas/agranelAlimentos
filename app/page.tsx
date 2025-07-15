"use client"
import Header from "./components/Header"
import ImageCarousel from "./components/ImageCarousel"
import ProductCategories from "./components/ProductCategories"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <ImageCarousel />
        <main className="container mx-auto px-4 py-8">
          <ProductCategories />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  )
}
