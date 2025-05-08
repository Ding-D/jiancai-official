import request from '@/api/request';
import { CarouselBanner } from '@/types';
import { Carousel } from 'antd';
import { memo, useEffect, useState } from 'react';

const Header = () => {
  const [banners, setBanners] = useState<CarouselBanner[]>([]);

  const getPic = async () => {
    const res = await request.get('/carousel/enabled');
    setBanners(res.data?.data);
  };

  useEffect(() => {
    getPic();
  }, []);

  return (
    <div className="">
      <Carousel autoplay>
        {(banners || []).map((item, index) => (
          <div key={index}>
            <img
              src={item.imageUrl}
              className="w-full object-cover sm:h-[588px] ssm:h-[191px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(Header);
