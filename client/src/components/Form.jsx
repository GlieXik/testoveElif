import { Box, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Map from "./Map";

const Form = () => {
  const { control, handleSubmit } = useForm({});
  const onSubmit = (data) => console.log(data);
  const [address, setAddress] = useState("");

  const handleLocationChange = (selectedAddress) => {
    setAddress(selectedAddress);
  };
  return (
    <>
      <Map onLocationChange={handleLocationChange} />
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 16 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                id="Name-basic"
                label="Name"
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                id="Email-basic"
                label="Email"
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                id="Phone-basic"
                label="Phone"
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                id="Address-basic"
                label="Address"
                variant="standard"
                onChange={(e) => setAddress(e.target.value)}
                {...field}
              />
            )}
          />
        </Box>

        <input type="submit" />
      </form>
    </>
  );
};
export default Form;
