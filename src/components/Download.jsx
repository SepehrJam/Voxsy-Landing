import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Download = () => {
  return (
    <section className="py-20 text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">آماده شروع سفر خود در ووکس هستید؟</h2>
        <Link
          to="/download"
          className="bg-[--main] hover:bg-[--main-dark] text-white rounded-full py-4 px-8 text-lg font-medium download-btn inline-flex items-center justify-center mx-auto"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          دانلود
        </Link>
      </div>
    </section>
  );
};

export default Download;
