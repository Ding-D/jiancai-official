import Title from '@/components/Title';
import AIKnowledge from './AIKnowledge';
import Cases from './Cases';
import Classes from './Classes';
import Process from './Process';
import ProjectDeliver from './ProjectDeliver';
import Quality from './Quality';
import Solution from './Solution';
import SuccessCases from './SuccessCases';
import SuccessCasesView from './SuccessCasesView';
import { Target } from './target';

const Support = () => {
  return (
    <div className="mt-[64px]">
      <Target />
      <Title
        className="my-[46px]"
        title="AI培训业务介绍"
        subtitle="TRAINInNG COURSE"
        id="AI培训业务介绍"
      />
      <AIKnowledge />
      <Classes />
      <Cases />
      <Solution />
      <Process />
      <SuccessCases />
      <ProjectDeliver />
      <Quality />
      <SuccessCasesView />
    </div>
  );
};

export default Support;
