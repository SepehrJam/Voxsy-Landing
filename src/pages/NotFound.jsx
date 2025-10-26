import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <h1 className="text-9xl font-bold text-[--main] mb-6">404</h1>
      <p className="text-lg text-[--color-main] mb-6 text-center">
        متأسفیم، صفحه‌ای که دنبال می‌کنید پیدا نشد.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[--main] text-white rounded-xl shadow hover:bg-[--main-dark] transition duration-300"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default NotFoundPage;
