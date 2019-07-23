import { FieldProps } from "formik";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

interface FieldPropsExt extends FieldProps {
  label: string;
}

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldPropsExt) => {
  const errorMessage = touched[field.name] && errors[field.name];
  const { label, ...rest } = props;

  return (
    <FormControl fullWidth={true} error={errorMessage ? true : false}>
      <InputLabel>{label}</InputLabel>
      <Input {...field} {...rest} />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};
