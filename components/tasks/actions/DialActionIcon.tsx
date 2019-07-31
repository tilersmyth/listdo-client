import * as React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import OtherIcon from "@material-ui/icons/AddBoxOutlined";
import CompleteIcon from "@material-ui/icons/CheckBoxOutlined";

interface Props {
  iconType: string;
}

const DialActionIcon: React.FunctionComponent<Props> = ({ iconType }) => {
  switch (iconType) {
    case "complete":
      return <CompleteIcon fontSize="small" />;
    case "other":
      return <OtherIcon fontSize="small" />;
    default:
      return <CheckBoxIcon fontSize="small" />;
  }
};

export default DialActionIcon;
