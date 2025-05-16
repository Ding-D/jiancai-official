import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './pages/Home/Header';
import { Suspense } from 'react';
import RouteView from './RouteView';
import { ConfigProvider, Spin } from 'antd';
import AiConsult from './components/AiConsult';

function App() {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="w-full h-screen flex justify-center items-center"
        />
      }
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#25B728',
          },
        }}
      >
        <div className="overflow-hidden sm:pt-[46px] ssm:pt-[91px] sm:min-w-[1400px] sm:mx-auto ssm:w-full">
          <AiConsult />
          <Nav />
          <Header />
          <RouteView />
          <Footer />
        </div>
      </ConfigProvider>
    </Suspense>
  );
}

export default App;
