export const Target = () => {
  // 锚点跳转
  const aLink = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div
      className="text-[14px] ssm:none px-[12px] py-[16px] rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
      style={{
        position: 'fixed',
        left: '4%',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
      }}
    >
      <div>
        <div
          className="text-[16px] text-blue-600 mt-[12px] mb-[6px] hover:scale-[105%] transition-transform duration-300 cursor-pointer font-bold"
          onClick={() => aLink('AI培训业务介绍')}
        >
          AI培训业务介绍
        </div>
        <div className="ml-[24px]">
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300 cursor-pointer mb-[8px]"
              onClick={() => aLink('培训内容优势')}
            >
              培训内容优势
            </div>
          </div>
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300 cursor-pointer mb-[8px]"
              onClick={() => aLink('培训课程体系')}
            >
              培训课程体系
            </div>
          </div>
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300 cursor-pointer mb-[8px]"
              onClick={() => aLink('培训成果与案例')}
            >
              培训成果与案例
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="text-[16px] text-blue-600 mt-[12px] mb-[6px] hover:scale-[105%] transition-transform duration-300  cursor-pointer font-bold"
          onClick={() => aLink('AI咨询与解决方案介绍')}
        >
          AI咨询与解决方案介绍
        </div>
        <div className="ml-[24px]">
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300  cursor-pointer mb-[8px]"
              onClick={() => aLink('特点与优势')}
            >
              特点与优势
            </div>
          </div>
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300  cursor-pointer mb-[8px]"
              onClick={() => aLink('咨询和解决方案工作流程')}
            >
              咨询和解决方案工作流程
            </div>
          </div>
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300  cursor-pointer mb-[8px]"
              onClick={() => aLink('成果案例展示')}
            >
              成果案例展示
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="text-[16px] text-blue-600 mt-[12px] mb-[6px] hover:scale-[105%] transition-transform duration-300 cursor-pointer font-bold"
          onClick={() => aLink('AI项目交付介绍')}
        >
          AI项目交付介绍
        </div>
        <div className="ml-[24px]">
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300 cursor-pointer mb-[8px]"
              onClick={() => aLink('交付团队介绍')}
            >
              交付团队介绍
            </div>
          </div>
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300 cursor-pointer mb-[8px]"
              onClick={() => aLink('交付流程与质量保障')}
            >
              交付流程与质量保障
            </div>
          </div>
          <div>
            <div
              className="text-gray-700 hover:text-blue-600 hover:scale-[105%] transition-all duration-300 cursor-pointer mb-[8px]"
              onClick={() => aLink('成功案例展示')}
            >
              成功案例展示
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
