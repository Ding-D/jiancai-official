import Xuanfuqiu2 from '@assets/xuanfuqiu2.png';
import { Button, Flex, Form, Input, message, Modal, Select, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import Warn from '@assets/warn.png';
import request from '@/api/request';
import { CompanyScaleOption, ConsultationNeedOption } from '@/types';

const AiConsult = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [companySize, setCompanySize] = useState<CompanyScaleOption[]>([]);
  const [aiConsultList, setAiConsultList] = useState<ConsultationNeedOption[]>(
    [],
  );

  const getCompanySize = async () => {
    const res = await request.get('/company/scale-option/list');
    setCompanySize(res.data?.data || []);
  };

  const getAiConsultList = async () => {
    const res = await request.get('/consultation/need-option/list');
    setAiConsultList(res.data?.data || []);
  };

  const handleSubmit = async () => {
    const data = form.getFieldsValue();
    console.log('data', data);
    // /message/submit
    try {
      const res = await request.post('/consultation/add', data);
      console.log('res', res);
      if (res.status === 200 && res.data?.code === 200) {
        form.resetFields();
        setVisible(false);
        messageApi.success('留言成功');
      }
    } catch (e) {
      // ts-ignore
      const msg =
        (e as { response: { data: { message: string } } })?.response?.data
          ?.message || '留言失败';
      messageApi.error(msg);
    }
  };

  console.log('companySize', companySize);

  useEffect(() => {
    getCompanySize();
    getAiConsultList();
  }, []);

  return (
    <>
      {contextHolder}
      <div
        className="fixed top-[40%] z-[9999] cursor-pointer sm:right-[45px] ssm:left-[12px]"
        onClick={() => setVisible(true)}
      >
        <img className="w-[76px]" src={Xuanfuqiu2} alt="" />
        {/* <div className="absolute text-[14px] top-[42px] left-[10px] text-[#fff]">
          商机留言
        </div> */}
      </div>
      <Modal
        width="70%"
        classNames={{
          content: '!p-0',
        }}
        open={visible}
        title={
          <div
            className="p-[13px] font-bold text-[28px] text-white leading-[34px] tracking-[2px] text-center normal-case"
            style={{
              background: 'linear-gradient( 132deg, #3EB6FD 0%, #2F79E3 100%)',
            }}
          >
            开启建筑建材供应链+AI新机遇
          </div>
        }
        onCancel={() => {
          setVisible(false);
        }}
        footer={
          <div className="sm:flex gap-[18px] sm:px-[88px] pb-[34px] justify-between ssm:px-[12px]">
            <div className="sm:flex items-center">
              <img src={Warn} alt="" />
              <div className="ml-[10px] text-[14px] text-[#888]">
                我们承诺严格保护您的隐私，所收集信息仅用于与您沟通业务需求。详细隐私政策请查看详情
              </div>
              <a
                className="text-[#0959F2]"
                href="http://www.jiancailvtan.com/api/upload/dc0f5cc82db3471ebddb9c28d17852311745844177530.docx"
              >
                查看详情
              </a>
            </div>
            <div className="sm:flex gap-[18px]">
              <Button
                className="ssm:mr-[8px]"
                onClick={() => setVisible(false)}
              >
                取消
              </Button>
              <Button onClick={handleSubmit} type="primary">
                提交咨询
              </Button>
            </div>
          </div>
        }
      >
        <div className="pt-[50px] sm:px-[88px] pb-[32px] ssm:px-[12px]">
          <Form
            form={form}
            layout="horizontal"
            onFinish={() => {
              setVisible(false);
            }}
            size="large"
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: '请输入姓名' }]}
            >
              <Input
                className="w-full px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="text"
                placeholder="请输入姓名"
              />
            </Form.Item>

            <Form.Item
              label="手机"
              name="phone"
              rules={[
                { required: true, message: '请输入手机' },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '请输入有效的手机号',
                },
              ]}
              className=""
            >
              <Input
                className="w-full px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="string"
                placeholder="请输入手机"
              />
            </Form.Item>

            <Form.Item label="公司名称" name="companyName">
              <Input
                className="w-full px-[16px] rounded-[4px] border border-[#D8D8D8]"
                type="text"
                placeholder="请输入公司名称"
              />
            </Form.Item>

            <Form.Item label="公司规模" name="companyScaleId" className="">
              <Select placeholder="请选择公司规模">
                {companySize.map((item) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            {/* <Form.Item
              name="companyScaleText"
              className="sm:w-[46%]  sm:inline-block"
            >
              <Input placeholder="请输入公司规模" />
            </Form.Item> */}

            <Form.Item label="咨询需求" name="consultationNeedId">
              <Select placeholder="请选择咨询需求">
                {aiConsultList.map((item) => {
                  return (
                    <Select.Option value={item.id} key={item.id}>
                      {item.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item label="您的留言" name="message">
              <TextArea
                className="w-full h-[100px] px-[16px] rounded-[4px] border border-[#D8D8D8]"
                placeholder="请输入留言内容"
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AiConsult;
