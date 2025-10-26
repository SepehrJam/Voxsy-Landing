import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faShieldAlt,
  faSearch,
  faKey,
  faMobileAlt,
  faUserFriends,
  faSyncAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Security = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[--main] animate-pulse-glow">
            امنیت و حریم خصوصی
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed slide-up">
            امنیت شما اولویت اول ماست. ما از پیشرفته‌ترین تکنولوژی‌های امنیتی برای محافظت از اطلاعات
            و مکالمات شما استفاده می‌کنیم.
          </p>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">ویژگی‌های امنیتی ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                رمزگذاری End-to-End
              </h3>
              <p className="text-text-secondary leading-relaxed">
                تمام مکالمات شما با رمزگذاری محافظت می‌شوند.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                حفاظت از داده‌ها
              </h3>
              <p className="text-text-secondary leading-relaxed">
                اطلاعات شخصی شما در سرورهای امن ذخیره می‌شوند.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                نظارت مداوم
              </h3>
              <p className="text-text-secondary leading-relaxed">
                تیم امنیتی ما 24/7 سیستم‌ها را نظارت می‌کند.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">نکات امنیتی برای کاربران</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                رمز عبور قوی
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                از رمزهای پیچیده و منحصر به فرد استفاده کنید
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                احراز هویت دو مرحله‌ای
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                امنیت حساب خود را با 2FA افزایش دهید
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                اعتماد نکنید
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                فقط با افراد شناخته شده ارتباط برقرار کنید
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faSyncAlt} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                به‌روزرسانی مداوم
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                اپلیکیشن را همیشه به‌روز نگه دارید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
