import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Premium Plus Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              المنتجات
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              الفئات
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              المدونة
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 