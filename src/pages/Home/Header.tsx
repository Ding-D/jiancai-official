import request from '@/api/request';
import { CarouselBanner } from '@/types';
import { Carousel } from 'antd';
import { memo, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
      <Carousel autoplay autoplaySpeed={4000}>
        {(banners || []).map((item, index) => (
          <div key={index}>
            <LazyLoadImage
              src={item.imageUrl}
              className="w-full 1k:object-cover 2xl:object-fill sm:h-[400px] ssm:h-[191px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(Header);
