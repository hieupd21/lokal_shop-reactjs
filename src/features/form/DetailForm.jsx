import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import QuantityForm from "../../components/Form-controls/QuantityForm";
import { Box, Button, Typography } from "@material-ui/core";

DetailForm.propTypes = {
  onQuantitySubmit: PropTypes.func,
};

function DetailForm({ onQuantitySubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Số lượng phải lớn hơn 1")
      .required("Vui lòng nhập số lượng")
      .typeError("Vui lòng nhập kiểu số"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleQuantitySubmit = (value) => {
    if (onQuantitySubmit) onQuantitySubmit(value);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleQuantitySubmit)}
      className="product-detail-form"
    >
      <Box className="row quantity-form">
        <Typography component="p" className="col p-2 quantity-label">
          Số lượng
        </Typography>
        <Typography component="div" className="col p-2 quantity-input">
          <QuantityForm name="quantity" form={form} />
        </Typography>
      </Box>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        className="button-form"
      >
        Thêm vào giỏ
      </Button>
    </form>
  );
}

export default DetailForm;
