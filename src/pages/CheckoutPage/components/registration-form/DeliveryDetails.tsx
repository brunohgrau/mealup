import { useNavigate } from "react-router-dom";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/forms/Input";

type DeliveryDetailsProps = {
  setForm: () => {};
  formData: {
    address: string;
    city: string;
    postcode: string;
  };
  navigation: any;
};

export const DeliveryDetails = ({
  setForm,
  formData,
  navigation,
}: DeliveryDetailsProps) => {
  return <div></div>;
};
