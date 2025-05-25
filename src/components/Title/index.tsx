const Title = ({
  title,
  subtitle,
  mainColor = '#333',
  color = '#1F2329',
  className = '',
  id = '',
}: {
  title: string;
  subtitle: string;
  mainColor?: string;
  color?: string;
  className?: string;
  id?: string;
}) => {
  return (
    <div className={`flex justify-center ${className}`} id={id}>
      <div className="relative w-[5px] h-[55px]">
        <span
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: 1,
            transform: 'translateX(-50%)',
            color: mainColor,
          }}
          className={`text-nowrap font-medium sm:text-[32px] ssm:text-[18px] leading-[55px]`}
        >
          {title}
        </span>
        <span
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            transform: 'translateX(-50%)',
            color: color === 'white' ? 'rgba(246,246,247,0.1)' : '#F6F6F7',
          }}
          className="text-nowrap font-bold sm:text-[38px] ssm:text-[24px] text-[#F6F6F7] leading-[55px] tracking-[4px] text-left normal-case"
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Title;
