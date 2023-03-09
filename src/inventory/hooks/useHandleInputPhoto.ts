import { Form } from "antd";
import { useState } from "react";

export const useHandleInputPhoto = () => {
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const form = Form.useFormInstance();

  const [image, setImage] = useState(form.getFieldValue("urlPhoto") || "");
  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const changeImage = (e: any) => {
    setImage(e.target.value);
  };

  return {
    image,
    changeImage,
    onWebsiteChange,
    websiteOptions,
  };
};
