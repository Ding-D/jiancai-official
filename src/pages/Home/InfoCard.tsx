const InfoCard = ({
  img = '',
  title = '',
  desc = '',
  time = '',
  redirectUrl = '',
}: {
  img: string;
  title: string;
  desc: string;
  time: string;
  redirectUrl: string;
}) => {
  return (
    <div
      className="flex flex-col gap-[18px] flex-shrink-0 w-[450px] ssm:w-full"
      onClick={() => {
        if (redirectUrl) {
          window.open(redirectUrl, '_blank');
        }
      }}
    >
      <img className="h-[280px] rounded-[6px]" src={img} alt="" />
      <div className="font-medium text-xl text-[#333333] leading-[30px] text-left">
        {title}
      </div>
      <div
        style={{ lineClamp: 3 }}
        className="font-normal text-base text-gray-600 leading-8 text-justify normal-case"
        dangerouslySetInnerHTML={{
          __html: desc.replace(/<[^>]+>/g, ''),
        }}
      ></div>
      <div className="font-normal text-base text-[#999] leading-8 text-justify normal-case">
        发布时间：{time}
      </div>
    </div>
  );
};

export default InfoCard;
