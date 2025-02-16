import Link from 'next/link';
import React from 'react';
import CommunityCarousel from '../Pages/CommunityCarousel';
import { getData } from 'lib/getData';

const CommunityTrainings = async() => {
  const trainings = await getData("trainings");
    return (
        <div className="h-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
      <div className="sm:px-6 px-6 sm:py-4 py-2 font-semibold text-center border-b border-gray-200 text-[10px] sm:text-lg dark:border-gray-600 bg-slate-100 dark:bg-gray-800 dark:text-white flex justify-between items-center">
        <h2>May Mart Community</h2>
        <Link
          href="/"
          className="px-4 py-2 transition-all rounded-md bg-lime-700 hover:bg-lime-600 text-slate-50"
        >
          See All
        </Link>
      </div>
      <div className="px-4 py-2">
        <CommunityCarousel trainings={trainings}/>
      </div>
    </div>
    );
};

export default CommunityTrainings;