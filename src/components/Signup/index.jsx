import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import { validateSignUp } from "../../constants/validateSignForm";
import ErrorMsg from "../ErrorMsg";
import { format } from "date-fns";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: new Date(),
    },
    validationSchema: validateSignUp,
    onSubmit: (values) => {
      const data = {
        ...values,
        dateOfBirth: format(values.dateOfBirth, "MM/dd/yyyy"),
      };
      alert(JSON.stringify(data, null, 2));
      formik.resetForm();
    },
  });

  return (
    <Box
      sx={{
        width: { xs: "95%", md: "30%" },
        background: "white",
        padding: { xs: "1rem 2rem", md: "2rem 3rem" },
        borderRadius: "20px",
        boxShadow: "0 3px 9px #13CBFA",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="h5">Sign Up Form</Typography>
      <Stack sx={{ position: "relative" }}>
        <TextField
          id="outlined-basic"
          label="First Name"
          name="firstName"
          fullWidth
          variant="outlined"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        />
        {formik.touched.firstName && Boolean(formik.errors.firstName) && (
          <ErrorMsg msg={formik.errors.firstName} />
        )}
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <TextField
          id="outlined-basic"
          label="Last Name"
          name="lastName"
          fullWidth
          variant="outlined"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        />
        {formik.touched.lastName && Boolean(formik.errors.lastName) && (
          <ErrorMsg msg={formik.errors.lastName} />
        )}
      </Stack>
      <Stack sx={{ position: "relative" }}>
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          fullWidth
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        {formik.touched.email && Boolean(formik.errors.email) && (
          <ErrorMsg msg={formik.errors.email} />
        )}
      </Stack>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date of Birth"
          value={formik.values.dateOfBirth}
          onChange={(value) => formik.setFieldValue("dateOfBirth", value)}
          onBlur={formik.handleBlur}
        />
      </LocalizationProvider>

      <Button type="submit" onClick={formik.handleSubmit} variant="contained">
        Continue
      </Button>
    </Box>
  );
};

export default Signup;
