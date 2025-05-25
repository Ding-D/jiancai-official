import { Button, Tabs, TabsProps, Input } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import InfoCard from './InfoCard';
import Title from '@/components/Title';
import { NewsArticle, NewsCategory } from '@/types';
import request from '@/api/request';
import ImgScrollLeft from '@assets/scrollLeft.png';

const News = () => {
  const [cate, setCate] = useState<NewsCategory[]>([]);
  const [selectKey, setSelectKey] = useState<string>('');
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  const getCate = async () => {
    const res = await request.get('/news/category/enabled');
    setCate(res.data?.data);
    setSelectKey(String(res.data?.data[0]?.id));
    getArt(String(res.data?.data[0]?.id));
  };

  const getArt = async (categoryId: string) => {
    console.log('getArt categoryId', categoryId);
    const res = await request.get(`/news/article/category/${categoryId}`);
    setArticles(res.data?.data);
  };

  useEffect(() => {
    getCate();
  }, []);

  const items: TabsProps['items'] = useMemo(() => {
    return (cate || []).map((item) => {
      return {
        key: String(item.id),
        label: item.name,
        children: <NewCard articles={articles} />,
      };
    });
  }, [cate, articles]);

  const handleSearch = async (value: string) => {
    if (!selectKey) return;
    const res = await request.get(`/news/article/category/${selectKey}`, {
      params: {
        query: value,
      },
    });
    setArticles(res.data?.data);
  };

  const renderTabBar = () => {
    return (
      <div className="flex justify-between flex-wrap items-center">
        <div className="flex gap-[14px] flex-wrap items-center ssm:mb-[12px]">
          {items.map((item) => {
            return (
              <Button
                key={item.key}
                type={selectKey === item.key ? 'primary' : 'default'}
                onClick={() => {
                  setSelectKey(item.key);
                  getArt(item.key);
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <div className="lg:w-[378px] xl:w-[378px] ssm:w-auto">
          <Input.Search placeholder="请输入" onSearch={handleSearch} />
        </div>
      </div>
    );
  };

  return (
    <div className="px-[13.5%]">
      <div className="flex justify-center">
        <Title
          className="my-[46px]"
          title="新闻与动态"
          subtitle="ORIENTATION"
        />
      </div>
      <div>
        <Tabs
          key={selectKey}
          items={items}
          renderTabBar={renderTabBar}
          onChange={(key: string) => {
            setSelectKey(key);
          }}
        />
      </div>
    </div>
  );
};

export default News;

const NewCard = ({ articles }: { articles: NewsArticle[] }) => {
  const ref = useRef(null);
  const scrollLeft = () => {
    if (ref.current) {
      const left = (ref.current.children?.[0].offsetWidth || 450) + 25;
      ref.current.scrollBy({ left: -left, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (ref.current) {
      const left = (ref.current.children?.[0].offsetWidth || 450) + 25;
      ref.current.scrollBy({ left: left, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {articles.length ? (
        <div
          className="absolute top-[50%] translate-y-[-50%] left-[-60px] z-[99] cursor-pointer"
          onClick={scrollLeft}
        >
          <img className="w-[42px] h-[42px]" src={ImgScrollLeft} alt="" />
        </div>
      ) : null}
      {articles.length ? (
        <div
          className="absolute top-[50%] translate-y-[-50%] right-[-60px] z-[99] cursor-pointer scale-x-[-1]"
          onClick={scrollRight}
        >
          <img className="w-[42px] h-[42px]" src={ImgScrollLeft} alt="" />
        </div>
      ) : null}

      <div
        className="flex gap-[25px] my-[36px] overflow-x-auto no-scrollbar"
        ref={ref}
      >
        {articles.map((item) => (
          <InfoCard
            img={item.coverUrl || ''}
            key={item.id}
            title={item.title || ''}
            desc={item.content || ''}
            // time="2025年02月24日18:31"
            time={item.createTime || ''}
            redirectUrl={item.redirectUrl || ''}
          />
        ))}
      </div>
    </div>
  );
};
