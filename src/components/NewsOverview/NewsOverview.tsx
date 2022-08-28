import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import News from '@/public/assets/images/news.jpeg';

const NewsOverview: FC = () => {
  return (
    <div className="news cursor-pointer">
      <div className="relative h-full w-full">
        <div className="relative h-[250px] w-full">
          <Image src={News} alt="news" layout="fill" />
        </div>
        <div className="flex flex-col items-center p-4">
          <h3 className="mb-2 w-full overflow-hidden text-ellipsis whitespace-nowrap text-center uppercase">
            Khả năng kiếm soát không khí của các hạt Bioaerosol
          </h3>
          <div className="h-[2px] w-8 bg-gray-400"></div>
          <p className="mt-2 h-8 w-full overflow-hidden text-ellipsis whitespace-nowrap text-center">
            Kiểm soát lọc thông khí của các hạt Bioaerosol các mầm bệnh trong
            khoogn khí
          </p>
        </div>
        <div className="date hover-animation absolute top-5 -left-2 flex flex-col items-center justify-center border-2 border-amber-900 bg-white py-1 px-3 text-amber-900">
          <span className="font-bold">16</span>
          <span className="text-xs font-semibold">Th7</span>
        </div>
      </div>
    </div>
  );
};

export default NewsOverview;
