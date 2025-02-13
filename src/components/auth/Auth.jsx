// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Input, Button, Form, message, QRCode } from "antd";
import { useNavigate } from "react-router-dom";
import ShowImages from "../../helper/ShowImages";
import UploadHelper from "../../helper/UploadHelper";
import html2canvas from "html2canvas";
import { login, register } from "../../api";
import _ from "lodash";
import {
  adminToken,
  ERROR_NOTIFICATION,
  SUCCESS_NOTIFICATION,
} from "../../helper/notification_helper";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [imgPath, setImgPath] = useState("");
  const [lastRegNo, setLastRegNo] = useState(0);
  const [qrValue, setQrValue] = useState("");

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const generateRegNo = () => {
    const year = new Date().getFullYear();
    const nextNumber = (lastRegNo + 1).toString().padStart(4, "0");
    return `${year}LIB${nextNumber}`;
  };

  const generateAndUploadQr = async (regNo) => {
    try {
      const qrElement = document.getElementById("qr-code");

      if (!qrElement) {
        throw new Error("QR code element not found.");
      }

      const canvas = await html2canvas(qrElement);
      const qrImage = canvas.toDataURL("image/png");

      const response = await fetch("http://localhost:8080/api/upload-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          base64Data: qrImage,
          fileName: `${regNo}.png`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload QR code.");
      }

      const { qrUrl } = await response.json();
      return qrUrl;
    } catch (err) {
      console.error("Error during QR code upload:", err.message);
      return null;
    }
  };

  const handleRegister = async (values) => {
    const regNo = generateRegNo();
    setLastRegNo(lastRegNo + 1);
    setQrValue(regNo);

    try {
      setLoading(true);

      const qrUrl = await generateAndUploadQr(regNo);

      if (!qrUrl) {
        throw new Error("QR code upload failed.");
      }

      const formData = {
        ...values,
        role: "user",
        reg_no: regNo,
        qr_code_url: qrUrl,
        user_img: imgPath,
      };

      const result = await register(formData);
      message.success("Registration successful!", result);
      setIsLogin(true);
    } catch (error) {
      console.error("Error during registration:", error.message);
      message.error("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const result = await login(values);
      if (_.isEmpty(_.get(result, "data.data.data", []))) {
        return ERROR_NOTIFICATION("Invalid credentials");
      }
      localStorage.setItem(adminToken, _.get(result, "data.data.token", ""));
      SUCCESS_NOTIFICATION(result);
      const role = _.get(result, "data.data.data.role", []);
      if (role === "user") {
        navigate("/user");
      } else {
        navigate(`/admin`);
      }
    } catch (err) {
      ERROR_NOTIFICATION(err);
    } finally {
      setLoading(false);
    }
  };

  const checkUserLoginStatus = async () => {
    if (localStorage.getItem(adminToken)) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          {isLogin ? "Login" : "Register"}
        </h2>

        {isLogin ? (
          <Form layout="vertical" onFinish={handleLogin} className="space-y-4">
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your Email Address!" },
                {
                  type: "email",
                  message: "Please enter a valid Email Address!",
                },
              ]}
            >
              <Input placeholder="Enter Email Address" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your Password!" },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="rounded-lg"
            >
              Login
            </Button>
          </Form>
        ) : (
          <Form
            onFinish={handleRegister}
            className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <Form.Item label="Profile Image" className="col-span-full">
              {imgPath ? (
                <ShowImages path={imgPath} setImage={setImgPath} />
              ) : (
                <UploadHelper setImagepath={setImgPath} />
              )}
            </Form.Item>
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[
                { required: true, message: "Please enter your First Name!" },
              ]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[
                { required: true, message: "Please enter your Last Name!" },
              ]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              className="col-span-full"
              rules={[
                { required: true, message: "Please enter your Address!" },
              ]}
            >
              <Input.TextArea placeholder="Enter Address" rows={2} />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please enter your City!" }]}
            >
              <Input placeholder="Enter City" />
            </Form.Item>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Please enter your State!" }]}
            >
              <Input placeholder="Enter State" />
            </Form.Item>
            <Form.Item
              label="Pincode"
              name="pincode"
              rules={[
                { required: true, message: "Please enter your Pincode!" },
                {
                  pattern: /^\d{6}$/,
                  message: "Please enter a valid 6-digit Pincode!",
                },
              ]}
            >
              <Input placeholder="Enter Pincode" />
            </Form.Item>
            <Form.Item
              label="Country"
              name="country"
              rules={[
                { required: true, message: "Please enter your Country!" },
              ]}
            >
              <Input placeholder="Enter Country" />
            </Form.Item>
            <Form.Item
              label="Mobile Number"
              name="mobile_number"
              rules={[
                { required: true, message: "Please enter your Mobile Number!" },
                {
                  pattern: /^\d{10}$/,
                  message: "Please enter a valid 10-digit Mobile Number!",
                },
              ]}
            >
              <Input placeholder="Enter Mobile Number" />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your Email Address!" },
                {
                  type: "email",
                  message: "Please enter a valid Email Address!",
                },
              ]}
            >
              <Input placeholder="Enter Email Address" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              className="col-span-full"
              rules={[
                { required: true, message: "Please enter your Password!" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long!",
                },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="col-span-full rounded-lg"
            >
              Register
            </Button>
          </Form>
        )}

        {!isLogin && qrValue && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-bold">Your QR Code:</h3>
            <QRCode
              value={qrValue}
              size={128}
              className="mx-auto"
              id="qr-code"
            />
          </div>
        )}

        <div className="text-center mt-6">
          <Button
            type="link"
            onClick={toggleAuthMode}
            className="text-primary hover:text-primary-dark"
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
