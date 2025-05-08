import request from '@/api/request';
import Title from '@/components/Title';
import { SurveyQuestion } from '@/types';
import { Button, Checkbox, Form, Input, message, Radio } from 'antd';
import { useEffect, useState } from 'react';

interface QuestionConfigItem {
  title: string;
  type: string;
  multiple?: boolean;
  options?: { value: string; label: string }[];
  showOther?: boolean;
}

const inputTypeMap = {
  single: 'radio',
  multiple: 'checkbox',
  text: 'textarea',
};

const Question = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [questionConfig, setQuestionConfig] = useState<QuestionConfigItem[]>(
    [],
  );

  const getQuestion = async () => {
    const res = await request.get('/survey/question/list');
    if (res.data?.data) {
      const data = res.data?.data.map((item: SurveyQuestion) => {
        return {
          title: item.questionText,
          type: inputTypeMap[item.questionType],
          multiple: item.questionType === 'multiple',
          options: JSON.parse(item.optionText || '[]').map((item: string) => {
            return {
              label: item,
              value: item,
            };
          }),
          showOther: item.questionType !== 'text',
        };
      });
      console.log('questionConfig', data);
      setQuestionConfig(data);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const renderHeader = () => {
    return (
      <>
        <div className="my-[50px]">
          <Title
            title="广州建采绿碳 AI+SAAS 产品需求调查问卷"
            subtitle={'Product Requirements Survey Questionnaire'.toUpperCase()}
          />
        </div>
        <div className="mb-[30px] py-[36px] px-[40px] bg-[#FDFEFF] rounded-[6px] border border-[#CAE2FF] border-dashed">
          <div className="text-[18px] text-[#0758F1] leading-[32px]">
            尊敬的客户：
          </div>
          <div className="text-[18px] text-[#0758F1] leading-[32px]">
            您好！非常感谢您参与我们的问卷调查。广州建采绿碳致力于为建筑建材行业打造创新的
            AI+SAAS
            产品，为了更好地满足您的需求，提升产品质量，我们特开展此次调研。您的宝贵意见对我们至关重要，请根据实际情况填写，问卷大约需要
            5 分钟完成，再次感谢您的支持与配合！
          </div>
        </div>
      </>
    );
  };

  const submit = async () => {
    const data = form.getFieldsValue();
    const finalData = [];
    for (const question of questionConfig) {
      const curRes = [question.title];
      if (question.type === 'checkbox') {
        const normal = data[question.title + 'normal'];
        const other = data[question.title + 'other'];
        const isNeedOther = normal?.find((item: string) =>
          item.includes('其他（请注明）'),
        );
        for (const ans of normal || []) {
          if (!ans.includes('其他（请注明）')) {
            curRes.push(ans);
          }
        }
        if (isNeedOther && other) curRes.push(other);
      }
      if (question.type === 'radio') {
        const normal = data[question.title + 'normal'];
        const other = data[question.title + 'other'];

        if (!normal?.includes('其他（请注明）') && normal) {
          curRes.push(normal);
        } else {
          if (other) curRes.push(other);
        }
      } else if (question.type === 'textarea') {
        curRes.push(data[question.title]);
      }
      finalData.push(curRes);
    }
    const res = await request.post('/survey/answer/submit', {
      answers: JSON.stringify(finalData),
    });
    if (res.status === 200 && res.data?.code === 200) {
      form.resetFields();
      messageApi.success('提交成功');
      return;
    }
    messageApi.error('提交失败');
  };
  const onCancel = () => {
    form.resetFields();
  };

  return (
    <div className="px-[13.5%] pb-[80px]">
      {contextHolder}
      {renderHeader()}
      <div className="text-[#666] py-[30px] px-[34px] bg-white shadow-[0px_6px_14px_0px_rgba(29,45,63,0.04)] rounded-[6px]">
        <Form
          layout="vertical"
          form={form}
          className="flex flex-col gap-[30px]"
          onFinish={submit}
        >
          {questionConfig.map((item) => {
            if (item.type === 'checkbox') {
              return (
                <>
                  <Form.Item
                    key={item.title + 'normal'}
                    label={item.title}
                    name={item.title + 'normal'}
                    layout="vertical"
                  >
                    <Checkbox.Group
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '20px',
                      }}
                    >
                      {item.options?.map((option, index) => {
                        return (
                          <Checkbox value={option.value} key={index}>
                            {option.label}
                          </Checkbox>
                        );
                      })}
                    </Checkbox.Group>
                  </Form.Item>
                  <Form.Item
                    key={item.title + 'other'}
                    name={item.title + 'other'}
                    layout="vertical"
                    style={{ marginTop: '-20px' }}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </>
              );
            } else if (item.type === 'radio') {
              return (
                <>
                  <Form.Item
                    key={item.title + 'normal'}
                    label={item.title}
                    name={item.title + 'normal'}
                    layout="vertical"
                  >
                    <Radio.Group
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '20px',
                      }}
                    >
                      {item.options?.map((option, index) => {
                        return (
                          <Radio value={option.value} key={index}>
                            {option.label}
                          </Radio>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    key={item.title + 'other'}
                    name={item.title + 'other'}
                    layout="vertical"
                    style={{ marginTop: '-20px' }}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </>
              );
            } else if (item.type === 'textarea') {
              return (
                <Form.Item
                  key={item.title}
                  name={item.title}
                  label={item.title}
                  layout="vertical"
                >
                  <Input.TextArea />
                </Form.Item>
              );
            }
          })}
          <Form.Item
            layout="horizontal"
            style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}
          >
            <Button className="sm:w-[146px]" onClick={onCancel}>
              取消
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="ml-[30px] sm:w-[146px]"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Question;
