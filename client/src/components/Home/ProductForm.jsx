import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const categories = ["clothing", "shoes", "accessories", "other"];

const ProductForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register, // Add the register function from react-hook-form
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here, you can submit the form data to your backend or perform any other actions
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ...Rest of the form fields... */}
        <Grid item xs={12} sm={6}>
          {/* Use the register function here */}
          <input type="file" {...register("file")} />
        </Grid>
        {/* ...Rest of the form fields... */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
