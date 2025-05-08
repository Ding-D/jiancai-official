import { Menu, MenuProps } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import Logo2 from '@/assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import useRouteStore from '@/store/useRouteStore';

const Nav = () => {
  const [current, setCurrent] = useState<string>('/official/index');
  const navigate = useNavigate();

  const routeConfig = useRouteStore((state) => state.routeConfig);
  const serverRouteConfig = useRouteStore((state) => state.serverRouteConfig);

  const items = useMemo(() => {
    return (routeConfig || []).map((item) => {
      return {
        key: item.path,
        label: item.label,
      };
    });
  }, [routeConfig]);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key as string);
    navigate(e.key as string);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setCurrent(routeConfig[0]?.path || '/official/index');
      navigate(routeConfig[0]?.path || '/official/index');
    }
    const matchedItem = serverRouteConfig.find((item) => item.linkUrl === path);
    if (matchedItem) {
      if (current !== matchedItem.linkUrl) {
        setCurrent(matchedItem.linkUrl || '/official/index');
      }
    } else if (serverRouteConfig[0]?.linkUrl) {
      if (current !== serverRouteConfig[0].linkUrl) {
        setCurrent(serverRouteConfig[0].linkUrl);
        navigate(serverRouteConfig[0].linkUrl);
      }
    }
  }, [serverRouteConfig, navigate, current, routeConfig]);

  return (
    <div className="fixed w-screen ssm:flex-wrap  top-0 z-50 flex justify-between px-[13.5%] bg-white">
      <div>
        <img src={Logo2} alt="logo" className="w-[337px] h-[46px]" />
      </div>
      <Menu
        style={{
          border: 'none',
          flex: 1,
          justifyContent: 'flex-end',
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Nav;
