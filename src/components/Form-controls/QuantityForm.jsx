import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import "../../features/Product/pages/style/detail.scss";

QuantityForm.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
};

function QuantityForm({ name, form }) {
  const { errors } = form;
  const hasError = !!errors[name];

  return (
    <FormControl error={hasError}>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <TextField
            variant="outlined"
            type="number"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            min={1}
            error={hasError}
            autoComplete="off"
            className="main-input"
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityForm;
