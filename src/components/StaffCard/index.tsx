import RightArrow from '@assets/rightArrow.png';
import { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import 'jquery.marquee';

const StaffCard = (props: {
  avatar: string;
  title: string;
  job: string;
  desc: string[];
}) => {
  const { avatar, title, job, desc } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const containerOffsetHeight = containerRef.current?.offsetHeight || 0;
    const contentOffsetHeight = contentRef.current?.offsetHeight || 0;
    const scrollHeight = contentOffsetHeight - containerOffsetHeight;

    if (scrollHeight > 0 && contentRef.current) {
      contentRef.current.className =
        (contentRef.current.className || '') + ' scrollY-animation';

      contentRef.current.innerHTML =
        contentRef.current.innerHTML + contentRef.current.innerHTML; // 重新渲染内容

      // 设置动画持续时间
      contentRef.current.style.animationDuration = `${(contentRef.current.offsetHeight - containerOffsetHeight) / 24}s`;
    }
  }, [desc]);
  return (
    <div className="flex flex-1 relative sm:items-start ssm:flex-wrap ssm:mb-[8px] ssm:text-center ssm:flex-col ssm:justify-center ssm:items-center">
      <img
        className="sm:w-[40%] border-none outline-none object-contain ssm:w-full"
        src={avatar}
        alt=""
      />
      <div
        style={{
          boxShadow: '0px 6px 14px 0px rgba(0,0,0,0.05)',
          borderRadius: '0px 6px 6px 0px',
        }}
        className="relative sm:w-[60%] sm:pb-[40%]  bg-white ssm:w-full"
      >
        <div className="sm:absolute w-full sm:h-full top-0 left-0 right-0 bottom-0 px-[18px] py-[10px] flex flex-col">
          <div className="flex gap-[10px] items-center">
            <span className="text-[#0758F1] font-bold text-[24px]">
              {title}
            </span>
            {job ? (
              <div className="py-[5px] px-[26px] bg-[#EEF7FD] text-[#3573FD] text-[14px] rounded-[4px]">
                {job}
              </div>
            ) : null}
          </div>
          <div ref={containerRef} className="flex-1 overflow-hidden relative">
            <div
              ref={contentRef}
              className="gap-[10px] flex flex-col no-scrollbar"
            >
              {(desc || []).map((item, index) => {
                return (
                  <div className="flex gap-[9px]" key={index}>
                    <img
                      src={RightArrow}
                      alt=""
                      className="w-[8px] h-[8px] mt-[8px]"
                    />
                    <span className="text-left">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
