import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-dark flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-voxsy-black">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-voxsy-blue/10 via-transparent to-voxsy-accent/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-voxsy-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-voxsy-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center px-6 py-20">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text leading-tight animate-pulse-glow">
            مکانی برای گفتگو و ارتباط
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed slide-up">
            ووکس مکانی برای ایجاد جامعه‌ی شما است؛ جایی که می‌توانید با دوستان خود ملاقات کنید، هر
            روز چت کنید و زمان بیشتری را با هم بگذرانید.
          </p>
        </div>

        <div className="slide-up flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="btn-primary text-lg px-8 py-4 glow-hover group">
            <i className="fas fa-download ml-2 group-hover:animate-bounce"></i>
            دانلود برای ویندوز
          </button>
          <button className="btn-secondary text-lg px-8 py-4 hover:glow">
            <i className="fas fa-globe ml-2"></i>
            باز کردن ووکس در مرورگر
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card text-center group">
            <div className="text-4xl font-bold text-[--main] mb-2 group-hover:scale-110 transition-transform">
              150M+
            </div>
            <div className="text-text-secondary">کاربر فعال</div>
          </div>
          <div className="card text-center group">
            <div className="text-4xl font-bold text-[--main] mb-2 group-hover:scale-110 transition-transform">
              19M+
            </div>
            <div className="text-text-secondary">سرور فعال</div>
          </div>
          <div className="card text-center group">
            <div className="text-4xl font-bold text-[--main] mb-2 group-hover:scale-110 transition-transform">
              4B+
            </div>
            <div className="text-text-secondary">پیام روزانه</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
