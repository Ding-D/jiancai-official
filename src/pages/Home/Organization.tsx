import Wrap from '@/components/Wrap';
import ZuzhijiagouBg from '@assets/zuzhijiagoubg.png';
import Zuzhijiagou from '@assets/zuzhijiagou.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Organization = () => {
  return (
    <Wrap
      subtitle="组织架构"
      bg={ZuzhijiagouBg}
      style={{ paddingLeft: '13.5%', paddingRight: '13.5%' }}
    >
      <div className="pt-[36px] pb-[79px]">
        <LazyLoadImage src={Zuzhijiagou} alt="" className="w-full" />
      </div>
    </Wrap>
  );
};

export default Organization;
