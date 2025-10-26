import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`ایمیل ${email} ثبت شد!`);
    setEmail('');
  };

  return (
    <footer dir="rtl" className="bg-[--color-bg-primary] border-t border-[--color-border] py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* برند */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 bg-[--color-main] rounded-lg flex items-center justify-center">
                <i className="fab fa-voxsy text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold bg-[--main] bg-clip-text text-transparent ml-3">
                ووکس
              </h3>
            </div>
            <p className="text-[--color-text-secondary] leading-relaxed">
              بهترین مکان برای گفتگو، ارتباط و ایجاد جامعه
            </p>
          </div>

          {/* محصول */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[--color-text-primary]">محصول</h4>
            <ul className="space-y-3">
              <li><Link to="/download" className="footer-link">دانلود</Link></li>
              <li><Link to="/security" className="footer-link">امنیت</Link></li>
            </ul>
          </div>

          {/* شرکت */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[--color-text-primary]">شرکت</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="footer-link">درباره ما</Link></li>
            </ul>
          </div>

          {/* خبرنامه */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[--color-text-primary]">خبرنامه</h4>
            <p className="text-[--color-text-secondary] leading-relaxed mb-4">
              ایمیل خود را وارد کنید تا جدیدترین اخبار ووکس را دریافت کنید.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل شما"
                className="flex-1 px-4 py-2 rounded-md bg-[--bg-tertiary] text-[--text-primary] placeholder-[--text-muted] outline-none border border-[--bg-tertiary] hover:border-[--main]"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[--main] text-white rounded-md hover:bg-[--main-dark] transition-colors"
              >
                ثبت‌نام
              </button>
            </form>
          </div>
        </div>

        {/* کپی رایت */}
        <div className="border-t border-[--color-border] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[--color-text-muted]">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <Link to="#" className="hover:text-[--color-text-primary] transition-colors">حریم خصوصی</Link>
              <Link to="#" className="hover:text-[--color-text-primary] transition-colors">شرایط استفاده</Link>
            </div>
            <div>© 2024 ووکس. تمام حقوق محفوظ است.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
