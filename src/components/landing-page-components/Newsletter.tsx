import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { Row, Col, Input, Form, Spin, message } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import axiosInstance from "../../config/axios-instance";
import WomanNewsletter from '../../assets/png/NewsletterIllust.png'

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#0BFFDB" }} spin />;


const Newsletter = () => {
  const isLoggedIn = useSelector((state: RootState) => state.authReducer.isLoggedIn);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onClickSubscribe = (values: any) => {
    if (values) {
      setIsLoading(true);
      axiosInstance({
        method: "post",
        url: "services/newsletter",
        data: values,
      })
        .then((response) => {
          setIsLoading(false);
          message.success({
            content: 'Vous êtes maintenant abonné à la newsletter!',
            className: 'success-message',
            duration: 3
          });
        })
        .catch((e) => {
          setIsLoading(false);
          message.error({
            content: 'Un probème est survenu! Veuillez réessayer plus tard.',
            className: 'error-message',
            duration: 3
          });
        })
      form.resetFields();
    }
  }
  return (
    <div className={"newsletter-landing"}>
      <div className="max-width-container newsletter-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={10} className={"left"}>
            <h2 className={"newsletter-title"}>Newsletter</h2>
            <p>Ne ratez aucune information sur l'actualité et recevez des recommandations chaque semaine.</p>
            {isLoggedIn ? null : (
              <div className={"subscribe-now"}>
                <Form
                  name="newsletter-form"
                  onFinish={onClickSubscribe}
                  className={"contact-form"}
                  form={form}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Tapez une adresse email SVP!",
                      },
                      {
                        type: "email",
                        message: "Tapez une adresse email valide SVP!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="E-mail"
                      size="large"
                      suffix={<button type="submit" className={"blue-btn"}>{isLoading ? (<Spin indicator={antIcon} />) : "S'abonner !"}</button>}
                    />
                  </Form.Item>
                </Form>
              </div>
            )}

          </Col>
          <Col xs={24} md={12} className={"right"}>
            <img src={WomanNewsletter} alt="woman illustration" />
          </Col>
        </Row>

      </div>
    </div>
  );
};

export default Newsletter;
