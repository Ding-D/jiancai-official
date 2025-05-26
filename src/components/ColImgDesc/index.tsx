import { ReactNode } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ColImgDesc = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-[45px] items-center px-[67px] py-[48px] bg-white shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)] rounded-[6px]">
      <span className="text-[24px] font-bold text-[#333]">{title}</span>
      <span className="text-[18px] text-left text-[#666]">{desc}</span>
      {/* <LazyLoadImage className="w-[140px] h-[140px]" src={icon as string} alt="" /> */}
      <LazyLoadImage className="ssm:w-full" src={icon as string} alt="" />
    </div>
  );
};

export default ColImgDesc;
