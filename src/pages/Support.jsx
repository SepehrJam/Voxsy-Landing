import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faComments,
  faEnvelope,
  faQuestionCircle,
  faWrench,
  faUser,
  faCreditCard,
  faChevronDown,
  faPaperPlane,
  faBookOpen,
  faPlayCircle,
  faUsers,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

const Support = () => {
  return (
    <div className="min-h-screen bg-voxsy-black text-text-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text animate-pulse-glow">
            پشتیبانی فنی
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed slide-up">
            ما اینجا هستیم تا به شما کمک کنیم. سوالات متداول، راهنماها و پشتیبانی 24/7 در دسترس
            شماست
          </p>
        </div>

        {/* Quick Help */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card text-center group hover-lift">
            <div className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3 className="text-xl font-bold m-4 text-text-primary group-hover:text-[--main] transition-colors">
              تماس مستقیم
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              با تیم پشتیبانی ما تماس بگیرید و پاسخ فوری دریافت کنید
            </p>
            <button className="btn-primary px-6 py-3 glow-hover">
              <FontAwesomeIcon icon={faPhone} className="ml-2" />
              تماس
            </button>
          </div>

          <div className="card text-center group hover-lift">
            <div
              className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
              style={{ animationDelay: '1s' }}
            >
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              چت آنلاین
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              با پشتیبانان ما چت کنید و راهنمایی فوری دریافت کنید
            </p>
            <button className="btn-primary px-6 py-3 glow-hover">
              <FontAwesomeIcon icon={faComments} className="ml-2" />
              شروع چت
            </button>
          </div>

          <div className="card text-center group hover-lift">
            <div
              className="text-6xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
              style={{ animationDelay: '2s' }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-[--main] transition-colors">
              ایمیل
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              ایمیل بفرستید و در کمتر از 24 ساعت پاسخ دریافت کنید
            </p>
            <button className="btn-primary px-6 py-3 glow-hover">
              <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
              ارسال ایمیل
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 gradient-text">ارسال درخواست پشتیبانی</h2>
          <div className="card max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="نام شما" className="input" />
                <input type="email" placeholder="ایمیل شما" className="input" />
              </div>

              <select className="input">
                <option>انتخاب دسته‌بندی</option>
                <option>عمومی</option>
                <option>فنی</option>
                <option>حساب کاربری</option>
                <option>پرداخت</option>
              </select>

              <input type="text" placeholder="موضوع" className="input" />

              <textarea
                className="input resize-none"
                rows="6"
                placeholder="توضیحات مشکل یا سوال شما"
              ></textarea>

              <button className="btn-primary px-8 py-3 glow-hover w-full">
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                ارسال درخواست
              </button>
            </form>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">منابع مفید</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover-lift">
              <div className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                راهنمای کامل
              </h3>
              <p className="text-text-secondary text-sm mb-4">راهنمای جامع استفاده از ووکس</p>
              <button className="btn-primary px-4 py-2 glow-hover">مطالعه</button>
            </div>

            <div className="card text-center group hover-lift">
              <div
                className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
                style={{ animationDelay: '1s' }}
              >
                <FontAwesomeIcon icon={faPlayCircle} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                ویدیوهای آموزشی
              </h3>
              <p className="text-text-secondary text-sm mb-4">آموزش تصویری ووکس</p>
              <button className="btn-primary px-4 py-2 glow-hover">تماشا</button>
            </div>

            <div className="card text-center group hover-lift">
              <div
                className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
                style={{ animationDelay: '2s' }}
              >
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                انجمن کاربران
              </h3>
              <p className="text-text-secondary text-sm mb-4">جامعه کاربران ووکس</p>
              <button className="btn-primary px-4 py-2 glow-hover">عضویت</button>
            </div>

            <div className="card text-center group hover-lift">
              <div
                className="text-5xl m-6 group-hover:scale-110 group-hover:text-[--main-dark] transition-transform float"
                style={{ animationDelay: '3s' }}
              >
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-[--main] transition-colors">
                وضعیت سرویس
              </h3>
              <p className="text-text-secondary text-sm mb-4">بررسی وضعیت سرورهای ووکس</p>
              <button className="btn-primary px-4 py-2 glow-hover">بررسی</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;