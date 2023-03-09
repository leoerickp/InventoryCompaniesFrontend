import { AutoComplete, Form, Input, Image, Space } from "antd";
import profilePhoto from "../../assets/img/photoprofile.jpg";
import { useHandleInputPhoto } from "../hooks/useHandleInputPhoto";

export const InputUrlPhoto = () => {
  const { image, changeImage, onWebsiteChange, websiteOptions } =
    useHandleInputPhoto();
  return (
    <>
      <Form.Item name="urlPhoto" label="URL Photo:">
        <AutoComplete
          options={websiteOptions}
          onChange={onWebsiteChange}
          placeholder="Url photo. Ex. http://..."
          onBlur={changeImage}
        >
          <Input />
        </AutoComplete>
      </Form.Item>
      <Space direction="vertical" style={{ width: "100%" }} align="center">
        <Image
          width={200}
          height={200}
          src={image}
          style={{ margin: "5px 0" }}
          fallback={profilePhoto}
        />
      </Space>
    </>
  );
};
