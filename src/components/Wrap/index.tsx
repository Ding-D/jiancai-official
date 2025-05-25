import { ReactNode } from 'react';
import SubTitle from '../SubTitle';

const Wrap = (props: {
  subtitle: string;
  children: ReactNode;
  bg?: ReactNode;
  style?: React.CSSProperties;
  id?: string;
}) => {
  const { subtitle, children, bg, style = {}, id } = props;
  return (
    <div
      style={{
        background: bg ? `url(${bg}) center no-repeat` : 'transparent',
        ...style,
      }}
      className="justify-center flex-1"
      id={id}
    >
      <div>
        <div className="flex">
          <SubTitle style={{ marginTop: '36px' }} title={subtitle} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Wrap;
