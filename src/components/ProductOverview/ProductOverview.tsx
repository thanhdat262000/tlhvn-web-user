import Product from '@/public/assets/images/product-1.png';
import Image from 'next/image';

const ProductOverview = () => {
  return (
    <div className="product cursor-pointer">
      <div className="h-full w-full">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={Product}
            alt="product"
            layout="fill"
            className="hover-animation"
          />
          <div className="review hover-animation absolute top-full w-full cursor-pointer bg-amber-900/90 py-2 text-center text-xs uppercase text-white">
            quick review
          </div>
        </div>
        <div className="flex flex-col items-center justify-start py-2">
          <p className="text-xs uppercase text-gray-600">air filter frame</p>
          <p>May loc khong khi</p>
          <span className="text-red-500">Liên hệ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
