import {
  faComments,
  faMicrophone,
  faUsers,
  faGaugeHigh,
  faLock,
  faGamepad,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Features = () => {
  return (
    <section className="py-20 px-6 bg-voxsy-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[--main]">چرا ووکس؟</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            ویژگی‌های منحصر به فرد ووکس که آن را به بهترین انتخاب تبدیل می‌کند
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="card group hover-lift text-center">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform duration-300 float">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              فضایی برای تنها بودن با جامعه شما
            </h3>
            <p className="text-text-secondary leading-relaxed">
              سرورهای ووکس به کانال‌های سازمان‌یافته‌ای تقسیم می‌شوند که در آن‌ها می‌توانید با هم
              همکاری کنید، اشتراک‌گذاری کنید و فقط در مورد روز خود بدون مسدود کردن یک گروه چت، صحبت
              کنید.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card group hover-lift text-center">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform duration-300 float">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              جایی که گفتگو آسان است
            </h3>
            <p className="text-text-secondary leading-relaxed">
              در یک کانال صوتی بنشینید وقتی که وقت آزاد دارید. دوستانتان در سرور شما می‌توانند
              ببینند که شما آنجا هستید و فوراً داخل بیایند تا بدون تماس گرفتن با هم صحبت کنند.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card group hover-lift text-center">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform duration-300 float">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              از چند نفر تا جامعه‌ای کامل
            </h3>
            <p className="text-text-secondary leading-relaxed">
              از مدیریت یک انجمن کوچک تا یک شبکه اجتماعی بزرگ، امکانات مدیریّت و ابزارهای شخصی‌سازی
              به شما کمک می‌کند تا فضایی اختصاصی برای خود ایجاد کنید.
            </p>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faLock} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">امنیت بالا</h4>
            <p className="text-text-secondary text-sm">رمزگذاری end-to-end</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faGaugeHigh} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">سرعت بالا</h4>
            <p className="text-text-secondary text-sm">تأخیر کم و کیفیت بالا</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faGamepad} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">گیمینگ</h4>
            <p className="text-text-secondary text-sm">بهترین تجربه برای گیمرها</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform">
              <FontAwesomeIcon icon={faLayerGroup} className="text-4xl" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-text-primary">چند پلتفرمه</h4>
            <p className="text-text-secondary text-sm">در همه جا در دسترس</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
