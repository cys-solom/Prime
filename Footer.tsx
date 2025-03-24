import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">عن Premium Plus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              متجر متخصص في بيع أحدث الهواتف الذكية والإكسسوارات بأفضل الأسعار
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  سياسة الشحن
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                البريد الإلكتروني: info@premiumplus.com
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                الهاتف: +966 12 345 6789
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">النشرة البريدية</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر العروض والتحديثات
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-2 rounded-r-lg border border-gray-300 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-l-lg hover:bg-primary-dark transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            جميع الحقوق محفوظة © 2024 Premium Plus
          </p>
        </div>
      </div>
    </footer>
  )
} 