import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./LoginForm.styles.css";
import { loginProxy } from "proxy/user";
interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: "hello@altence.com",
  password: "some-test-pass",
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (values: LoginFormData) => {
    // let res = await loginProxy();
    navigate("/", { replace: true });
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark="optional"
      initialValues={initValues}
      className="form-login"
    >
      <div className="form-title">Login</div>
      <Form.Item
        name="email"
        label={"Email"}
        rules={[{ required: true, message: `${"Please enter your email"}` }]}
      >
        <Input className="form-login-input" placeholder={`${"email"}`} />
      </Form.Item>
      <Form.Item
        label={"Password"}
        name="password"
        rules={[{ required: true, message: `${"Please enter you password"}` }]}
      >
        <Input
          className="form-login-input"
          type="password"
          placeholder={`${"password"}`}
        />
      </Form.Item>

      <Form.Item noStyle>
        <Button
          className="form-login-submit"
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          {"Login"}
        </Button>
      </Form.Item>
    </Form>
  );
};
