import { Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import Logo from '@/public/assets/images/tlh-logo.png';
import { useScroll } from 'framer-motion';

const Header: FC = () => {
  const { scrollY } = useScroll();
  const [scrollYOffset, setScrollYOffset] = useState<number>(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollYOffset(latest);
    });
  }, []);

  return (
    <header
      className={`hover-animation sticky top-0 z-10 flex w-full justify-center border-b-[1px] border-b-slate-200 bg-white shadow-md shadow-gray-300 ${
        scrollYOffset > 120 ? 'h-[80px]' : 'h-[100px]'
      }`}
    >
      <div className="mx-10 flex w-full max-w-[1280px] items-center justify-between px-5">
        <div>
          <Link href="/">
            <a className="cursor-pointer">
              <Image src={Logo} alt="logo" width={100} height={60} />
            </a>
          </Link>
        </div>
        <nav>
          <Link href="/">
            <Space className="mx-2" size={6}>
              <a className="font-semibold">TRANG CHỦ</a>
              <FiChevronDown />
            </Space>
          </Link>
          <Link href="/">
            <Space className="mx-2" size={6}>
              <a className="font-semibold">TRANG CHỦ</a>
              <FiChevronDown />
            </Space>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
