import request from '@/api/request';
import ImgDesc from '@/components/ImgDesc';
import Wrap from '@/components/Wrap';
import { AiProjectDeliveryCase } from '@/types';
import { useState } from 'react';

const SuccessCases = () => {
  const [cases, setCases] = useState<AiProjectDeliveryCase[]>([]);
  const getCase = async () => {
    const res = await request.get('/ai/success/case/list');
    console.log('🚀 ~ getCase ~ res 2:', res);

    setCases(res.data?.data);
  };

  useState(() => {
    getCase();
  }, []);

  return (
    <Wrap
      style={{
        paddingLeft: '13.5%',
        paddingRight: '13.5%',
        background: 'white',
      }}
      subtitle="成果案例展示"
      id="成果案例展示"
    >
      <div className="pt-[60px] pb-[87px] flex flex-col gap-[102px]">
        {cases.map((item, index) => {
          return (
            <ImgDesc
              key={index}
              reverse={index % 2 === 0}
              img={item.imageUrl as string}
              title={item.title as string}
              descTip={item.subtitle as string}
              desc={JSON.parse(item.content || '[]') as string[]}
            />
          );
        })}
      </div>
    </Wrap>
  );
};

export default SuccessCases;
