import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 4999,
    image: '/products/iphone-15-pro-max.jpg',
    category: 'هواتف ذكية'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 4799,
    image: '/products/samsung-s24-ultra.jpg',
    category: 'هواتف ذكية'
  },
  // يمكن إضافة المزيد من المنتجات هنا
]

export const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dummyProducts.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} className="group">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{product.category}</p>
              <p className="text-xl font-bold text-primary">{product.price} ريال</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 