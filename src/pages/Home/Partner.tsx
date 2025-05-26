import Wrap from '@/components/Wrap';
import Hezuohuopan from '@assets/hezuohuopan.png';
import Huopan01 from '@assets/huopan01.png';
import Huopan02 from '@assets/huopan02.png';
import Huopan03 from '@assets/huopan03.png';
import Huopan04 from '@assets/huopan04.png';
import Huopan05 from '@assets/huopan05.png';
import Huopan06 from '@assets/huopan06.png';
import Huopan07 from '@assets/huopan07.png';
import Huopan08 from '@assets/huopan08.png';
import Huopan09 from '@assets/huopan09.png';
import Huopan010 from '@assets/huopan010.png';

const Partner = () => {
  const data = [
    [Huopan01, Huopan02, Huopan03, Huopan04, Huopan05],
    [Huopan06, Huopan07, Huopan08, Huopan09, Huopan010],
  ];

  return (
    <Wrap
      subtitle="合作伙伴"
      bg={Hezuohuopan}
      style={{
        paddingLeft: '13.5%',
        paddingRight: '13.5%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="pb-[100px] pt-[80px]  mx-[-13.5%] relative overflow-x-auto no-scrollbar"
        style={{
          maskImage: `repeating-linear-gradient(to left, rgba(254, 255, 255, 0) 0%, rgba(254, 255, 255, 0.98) 42%, rgba(254, 255, 255, 0) 100%)`,
        }}
      >
        <div className="flex justify-center sm:gap-[30px] z-[1] ssm:flex-wrap sm:translate-x-[0px] scrollX-animation">
          {data[0].map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className="cursor-pointer hover:scale-[105%] transition-all duration-300 ssm:w-[50%]"
              />
            );
          })}
          {data[0].map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className="cursor-pointer hover:scale-[105%] transition-all duration-300 ssm:w-[50%]"
              />
            );
          })}
        </div>
        <div className="flex justify-center sm:gap-[30px] z-[1] ssm:flex-wrap sm:translate-x-[88px] scrollX-animation">
          {data[1].map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className="cursor-pointer hover:scale-[105%] transition-all duration-300 ssm:w-[50%]"
              />
            );
          })}
          {data[1].map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className="cursor-pointer hover:scale-[105%] transition-all duration-300 ssm:w-[50%]"
              />
            );
          })}
        </div>
      </div>
    </Wrap>
  );
};

export default Partner;
