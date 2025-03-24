import Image from 'next/image'
import { Header } from '@/components/Header'
import { ProductGrid } from '@/components/ProductGrid'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8">مرحباً بكم في Premium Plus</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300">
            اكتشف أحدث الهواتف الذكية والإكسسوارات بأفضل الأسعار
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">المنتجات المميزة</h2>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </>
  )
} 