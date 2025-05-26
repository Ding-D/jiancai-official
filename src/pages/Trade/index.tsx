import Title from '@/components/Title';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import BackArrow from '@assets/backArrow.png';
import { Breadcrumb } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import useRouteStore from '@/store/useRouteStore';
import request from '@/api/request';
import { SupplierPartner } from '@/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Trade = () => {
  return (
    <div className="mt-[64px]">
      <Outlet />
    </div>
  );
};

export default Trade;

export const TradeList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState<SupplierPartner[]>([]);

  const getTradeList = async () => {
    const res = await request.get('/supplier/partner/list');
    if (res.data?.data) {
      setData(res.data?.data);
    }
  };

  useEffect(() => {
    getTradeList();
  }, []);

  return (
    <div className="px-[13.5%]">
      <div className="my-[48px] flex justify-center">
        <Title
          title="合作供应商"
          subtitle={'Cooperative suppliers'.toUpperCase()}
        />
      </div>
      <div className="sm:grid grid-cols-3 gap-[25px]  pb-[110px]">
        {data.map((item, key) => {
          return (
            <TradeCard
              key={key}
              img={item.logoUrl || ''}
              title={item.name || ''}
              desc={item.description || ''}
              address={item.address || ''}
              onClick={() => {
                const pathname = location.pathname;
                navigate(`${pathname}/detail?id=${item.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const TradeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState<SupplierPartner | null>(null);

  const routeConfig = useRouteStore((state) => state.routeConfig);

  const breadcrumbPaths = useMemo(() => {
    const paths = location.pathname.split('/').filter((path) => path);
    paths.shift(); // 去掉official前缀
    let source = routeConfig;
    const res = [];
    for (let i = 0; i < paths.length; i++) {
      const target = source.find((item) =>
        item.path.replace('/', '').includes(paths[i].replace('/', '')),
      );
      if (target) {
        res.push({ title: target.label });
        source = target.children || [];
      }
    }
    return res;
  }, [location.pathname, routeConfig]);
  const getData = async () => {
    const res = await request.get(
      `/supplier/partner/${new URLSearchParams(location.search).get('id')}`,
    );
    if (res.data?.data) {
      console.log('🚀 ~ getData ~ res.data?.data:', res.data?.data);
      setData(res.data?.data);
    }
  };

  const titleCls = 'text-[20px] text-[#1F2329] font-[500] leading-[29px]';

  const renderSubtitle = (title: string) => {
    return (
      <div className={`${titleCls} relative my-[24px]`}>
        <span className="relative z-10">{title}</span>
        <div className="absolute bottom-[5px] left-0 w-[88px] h-[6px] bg-[#D5FDF0] rounded-none"></div>
      </div>
    );
  };

  const renderCompanyInfo = () => {
    return (
      <div>
        {renderSubtitle('公司信息')}
        <div className=" py-[8px] px-[18px] bg-[#FDFEFF] rounded-[6px] border border-[#CAE2FF] border-dashed">
          <div className="flex items-center justify-between ssm:flex-wrap">
            <div className="flex items-center ssm:mb-[8px]">
              <LazyLoadImage
                className="w-[54px] h-[54px] flex-shrink-0"
                src={data?.logoUrl || ''}
                alt=""
              />
              <span className="text-[16px] text-[#1E2983] ml-[12px]">
                {data?.name}
              </span>
            </div>
            <div>
              <span className="text-[16px] text-[#333333]">公司地址：</span>
              <span className="text-[16px] text-[#333]">
                {data?.address || '暂无'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCompanyDesc = () => {
    return (
      <div>
        {renderSubtitle('公司简介')}
        <div className="text-[14px] text-[#333] whitespace-pre-wrap">
          {data?.description || '暂无'}
        </div>
      </div>
    );
  };

  const renderCompanyImgs = () => {
    return (
      <div>
        {renderSubtitle('公司图片')}
        <div className="grid grid-cols-2 gap-4">
          {data?.images?.map((item, key) => {
            return (
              <LazyLoadImage
                key={key}
                className="object-cover"
                src={item.fileUrl || ''}
                alt=""
              />
            );
          })}
        </div>
      </div>
    );
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-[13.5%]">
      <div className="my-[28px] flex justify-between">
        <div
          className="flex gap-[2px] items-center cursor-pointer"
          onClick={() => navigate('/official/trade')}
        >
          <LazyLoadImage className="w-[14px] h-[14px]" src={BackArrow} alt="" />
          <span className="text-[14px] text-[#87898C]">返回</span>
        </div>
        <div className="flex gap-[2px]">
          <span>当前位置：</span>
          <Breadcrumb items={breadcrumbPaths} separator=">" />
        </div>
      </div>
      <div className="py-[30px] px-[42px] bg-white shadow-[0px_6px_14px_0px_rgba(29,45,63,0.04)] rounded-[6px]">
        {renderCompanyInfo()}
        {renderCompanyDesc()}
        {renderCompanyImgs()}
      </div>
    </div>
  );
};

const TradeCard = ({
  img,
  title,
  desc,
  address,
  onClick,
}: {
  img: string;
  title: string;
  desc: string;
  address: string;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex flex-col gap-[12px]">
      <div className="w-full pb-[62%] relative">
        <LazyLoadImage
          className="w-full h-full absolute top-0 left-0 right-0  bottom-0"
          src={img}
          alt=""
        />
      </div>
      <span className="text-[20px] text-[#333] truncate">{title}</span>
      <span className="text-[16px] text-[#666] line-clamp-3">{desc}</span>
      <span className="text-[16px] text-[#999] truncate">
        公司地址：{address}
      </span>
    </div>
  );
};
