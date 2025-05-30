import QrCodeWx from '@assets/qrCodeWx.png';
import QrCodeWxVideo from '@assets/qrCodeWxVideo.png';
import QrCodeWxWx from '@assets/qrCodeWxWx.png';
import JiancaiAI from '@assets/jiancai-ai.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const qrCodeData = [
  {
    icon: QrCodeWx,
    label: '微信公众号（官方）',
  },
  {
    icon: JiancaiAI,
    label: '微信公众号（AI）',
  },
  {
    icon: QrCodeWxVideo,
    label: '微信视频号',
  },
  {
    icon: QrCodeWxWx,
    label: '微信号',
  },
];

const WxQrCode = ({ codeStyle = {} }: { codeStyle?: React.CSSProperties }) => {
  return (
    <div className="flex flex-wrap gap-[24px] ssm:justify-center">
      {qrCodeData.map((item, index) => {
        return (
          <div
            style={codeStyle}
            className="flex-1 flex flex-col gap-[4px] items-center"
            key={index}
          >
            <LazyLoadImage
              className="w-[96px] h-[96px]"
              src={item.icon}
              alt=""
            />
            <span className="text-[14px] text-white whitespace-nowrap">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WxQrCode;
