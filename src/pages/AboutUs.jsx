import {
  faHandshake,
  faLock,
  faRocket,
  faGlobeAmericas,
  faUserTie,
  faLaptopCode,
  faPalette,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[--main]">درباره ما</h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            ووکس در سال 2015 با هدف ایجاد فضایی بهتر برای ارتباط و گفتگو بین گیمرها شروع به کار کرد.
            امروز ما بیش از 150 میلیون کاربر داریم.
          </p>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 text-[--main]">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-lift ">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float ">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                جامعه‌محور
              </h3>
              <p className="text-text-secondary leading-relaxed">
                ما معتقدیم که ارتباطات قوی، جوامع قوی می‌سازد. ووکس برای تقویت این ارتباطات طراحی
                شده است.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                امنیت و حریم خصوصی
              </h3>
              <p className="text-text-secondary leading-relaxed">
                امنیت کاربران ما اولویت اول ماست. ما از پیشرفته‌ترین تکنولوژی‌های امنیتی استفاده
                می‌کنیم.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                نوآوری مداوم
              </h3>
              <p className="text-text-secondary leading-relaxed">
                ما همیشه در حال بهبود و توسعه ووکس هستیم تا بهترین تجربه ممکن را برای کاربران فراهم
                کنیم.
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                تنوع و شمول
              </h3>
              <p className="text-text-secondary leading-relaxed">
                ووکس برای همه است. ما از تنوع و شمول در جامعه خود استقبال می‌کنیم و از آن حمایت
                می‌کنیم.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">تیم ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                تیم مدیریت
              </h3>
              <p className="text-text-secondary leading-relaxed">
                رهبران با تجربه که آینده ووکس را شکل می‌دهند
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                تیم فنی
              </h3>
              <p className="text-text-secondary leading-relaxed">
                مهندسان نرم‌افزار که ووکس را به‌روز و امن نگه می‌دارند
              </p>
            </div>
            <div className="card text-center group hover-lift">
              <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <h3 className="text-xl font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                تیم طراحی
              </h3>
              <p className="text-text-secondary leading-relaxed">
                طراحان که تجربه کاربری زیبا و کاربردی می‌سازند
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">تماس با ما</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              سوالی دارید؟ پیشنهادی دارید؟ ما همیشه آماده شنیدن نظرات شما هستیم.
            </p>
            <div className="grid grid-cols-1 gap-8">
              <div className="card text-center group hover-lift">
                <div className="text-4xl m-4 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3 className="text-lg font-bold m-7 text-text-primary group-hover:text-[--main] transition-colors">
                  ایمیل
                </h3>
                <p className="text-text-secondary">support@voxsy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
