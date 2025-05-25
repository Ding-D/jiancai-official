import Wrap from '@/components/Wrap';
import Process01 from '@assets/process01.png';
import Process02 from '@assets/process02.png';
import Process03 from '@assets/process03.png';
import Process04 from '@assets/process04.png';

// 生成ProcessCard的mock数据列表
const data = [
  {
    title: '需求分析',
    desc: [
      '多维度深入调研客户企业商业模式、运营流程、痛点及 AI 应用期望目标，全面收集信息。',
      '结合独创 AI 能力拆分组合理论，精准识别可应用 AI技术的关键场景，明确解决方案目标。',
    ],
    icon: Process01,
  },
  {
    title: '方案设计',
    desc: [
      '流程规划:基于需求分析与现状评估结果，重新设计适配,AL应用的工作流程，规划数据采集、计算分析、处理输出及应用流程，确保 A工具与原有系统业务无缝衔接。',
      '节点设计:细化每个工作节点的操作规范与要求，明确 A工具与原有系统、人工操作的协同方式，制定数据输入输出标准，保障流程顺畅运行。',
      '方案细化:对设计方案反复优化，充分考虑各类场景风险，制定应对措施，确保方案稳定可靠，覆盖技术选型、应用场景规划、实施步骤等核心内容。',
    ],
    icon: Process02,
  },
  {
    title: '实施与测试',
    desc: [
      '根据设计方案进行系统开发和实施。',
      '进行系统测试，确保系统功能正常。',
    ],
    icon: Process03,
  },
  {
    title: '交付与培训',
    desc: ['将系统交付给客户，并进行相关培训。', '提供后续支持和维护服务。'],
    icon: Process04,
  },
];

const Process = () => {
  return (
    <Wrap
      style={{
        paddingLeft: '13.5%',
        paddingRight: '13.5%',
        background: '#FBFCFE',
      }}
      subtitle="咨询和解决方案工作流程"
      id="咨询和解决方案工作流程"
    >
      <div className="flex flex-col gap-[46px] pt-[45px] pb-[80px]">
        {data.map((item, index) => {
          return <ProcessCard key={index} {...item} />;
        })}
      </div>
    </Wrap>
  );
};

export default Process;

const ProcessCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string[];
}) => {
  return (
    <div className="sm:flex items-center gap-[53px]">
      <img src={icon} alt="" />
      <div className="flex-1 bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] rounded-[6px] py-[16px] px-[24px]">
        <div className="text-[20px] font-bold text-[#333] mb-[14px]">
          {title}
        </div>
        <div className="flex flex-col gap-[8px]">
          {desc.map((item, index) => {
            return (
              <div
                key={index}
                className="text-[18px] text-[#666] flex items-center"
              >
                · {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
