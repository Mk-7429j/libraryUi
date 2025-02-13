// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { adminToken } from "../../helper/notification_helper";
import { checkLoginStatus } from "../../api";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { Spin } from "antd";

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const checkUserLoginStatus = async () => {
    if (!localStorage.getItem(adminToken)) {
      navigate("/auth");
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const fetchData = async () => {
    try {
      setloading(true);
      const result = await checkLoginStatus();

      if (
        _.isEmpty(_.get(result, "data.data", [])) ||
        _.get(result, "data.data.role", []) === "user"
      ) {
        if (_.get(result, "data.data.role", []) === "user") {
          return navigate("/");
        }

        localStorage.removeItem(adminToken);
        return navigate("/auth");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Spin spinning={loading}>
      <div>admin</div>
    </Spin>
  );
};

export default Admin;
