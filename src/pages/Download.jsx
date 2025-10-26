import { faChrome, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faLock, faBolt, faGamepad, faGift, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Download = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[--main]">دانلود ووکس</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            ووکس را برای کامپیوتر، موبایل یا مرورگر خود دانلود کنید و با دوستان خود در ارتباط باشید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto slide-up">
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faWindows} className="text-[--main-light]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">ویندوز</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">نسخه کامل ووکس برای ویندوز</p>
            <button className="flex items-center justify-center btn-primary w-full glow-hover">
              <FontAwesomeIcon icon={faWindows} className="mr-2" />
              دانلود برای ویندوز
            </button>
          </div>

          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faMobile} className="text-[--main-light]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">موبایل</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              اپلیکیشن ووکس برای اندروید و iOS
            </p>
            <button className="flex items-center justify-center btn-primary w-full glow-hover">
              <FontAwesomeIcon icon={faMobile} className="mr-2" />
              دانلود برای موبایل
            </button>
          </div>

          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faChrome} className="text-[--main-light]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">مرورگر</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              استفاده از ووکس بدون نیاز به دانلود
            </p>
            <button className="flex items-center justify-center btn-primary w-full glow-hover">
              <FontAwesomeIcon icon={faChrome} className="mr-2" />
              باز کردن در مرورگر
            </button>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">چرا ووکس را انتخاب کنیم؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">امنیت بالا</h3>
              <p className="text-text-secondary">رمزگذاری end-to-end برای تمام مکالمات</p>
            </div>
            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">سرعت بالا</h3>
              <p className="text-text-secondary">ارتباط با کمترین تأخیر ممکن</p>
            </div>
            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main] transition-transform">
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">گیمینگ</h3>
              <p className="text-text-secondary">بهترین تجربه برای گیمرها</p>
            </div>
            <div className="card text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:text-[--main]  transition-transform">
                <FontAwesomeIcon icon={faGift} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">رایگان</h3>
              <p className="text-text-secondary">استفاده کاملاً رایگان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
