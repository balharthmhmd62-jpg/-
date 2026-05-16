import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Leadership Platform</h3>
            <p className="text-gray-400">منصة للقيادة والابتكار</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">الروابط</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-white">
                  المقالات
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-white">
                  فريق القيادة
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">المتابعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">التواصل</h4>
            <p className="text-gray-400">البريد الإلكتروني: info@example.com</p>
            <p className="text-gray-400">الهاتف: +966 XX XXX XXXX</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Leadership Platform. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
