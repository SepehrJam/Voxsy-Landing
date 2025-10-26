import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* لودینگ */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[--bg-primary] transition-opacity  ${
          loading ? 'opacity-100 pointer-events-auto duration-0' : 'opacity-0 pointer-events-none duration-300'
        }`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[--main]"></div>
      </div>


    </>
  );
};

export default PageLoader;
