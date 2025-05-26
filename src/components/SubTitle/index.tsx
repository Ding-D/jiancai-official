import SubtitleLeft from '@assets/SubtitleLeft.png';
import SubtitleRight from '@assets/SubtitleRight.png';
import { CSSProperties } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SubTitle = ({
  title,
  style = {},
}: {
  title: string;
  style?: CSSProperties;
}) => {
  return (
    <div style={style} className="flex gap-[6px] items-center">
      <LazyLoadImage src={SubtitleLeft} alt="" />
      <span className="font-bold text-[24px] text-[#333] ssm:text-center">
        {title}
      </span>
      <LazyLoadImage src={SubtitleRight} alt="" />
    </div>
  );
};

export default SubTitle;
