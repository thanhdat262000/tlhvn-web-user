import { Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import Logo from '@/public/assets/images/tlh-logo.png';

const Header: FC = () => {
  return (
    <header className="flex h-[80px] w-full justify-center border-b-[1px] border-b-slate-200 shadow-md shadow-gray-300">
      <div className="mx-10 flex w-full max-w-[1280px] items-center justify-between">
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
