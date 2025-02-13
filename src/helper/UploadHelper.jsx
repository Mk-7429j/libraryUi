/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { message, Skeleton, Upload } from "antd";
import _ from "lodash";
import { Icon_Helper } from "../helper/icon_helper";
import { uploadImage } from "../api";

const UploadHelper = (props) => {
  const { setImagepath, multiple, max, image_path, field_key } = props;
  const [loading, setLoading] = useState(false);

  const ImageValidation = {
    beforeUpload: (file) => {
      setLoading(true);
      const isImage = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ].includes(file.type);
      if (!isImage) {
        message.warning(`${file.name} is not supported`);
        setLoading(false);
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange: async (info) => {
      setLoading(false);
      try {
        if (_.get(info, "file.status", "") === "uploading") {
          let formData = new FormData();

          formData.append("image", info.file.originFileObj);

          const result = await uploadImage(formData);

          if (Number(field_key)) {
            setImagepath([
              ...image_path,
              {
                key: image_path?.length + 1,
                path: _.get(result, "data.data.url", ""),

                field_key: field_key,
              },
            ]);
          } else {
            multiple
              ? setImagepath([
                  ...image_path,
                  {
                    key: image_path?.length + 1,
                    path: _.get(result, "data.data.url", ""),
                  },
                ])
              : setImagepath(_.get(result, "data.data.url", ""));
          }
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    },
  };

  return (
    <>
      <Skeleton
        loading={loading}
        active
        className="flex flex-row !rounded-full justify-center items-center"
      >
        <Upload
          {...ImageValidation}
          maxCount={max || 1}
          type="drag"
          style={{ width: 100, background: "white" }}
          showUploadList={false}
        >
          <div className="!w-full !h-[60px] !center_div">
            <Icon_Helper.UploadIcon />
          </div>
        </Upload>
      </Skeleton>
    </>
  );
};

export default UploadHelper;
