import { Box, Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Map from "./Map";
import { useSelector } from "react-redux";
import { selectAllCart } from "../store/selectors/cartSelectors";
import { useAddNewOrderMutation } from "../store/operations";

const Form = () => {
  const { control, handleSubmit } = useForm({});
  const cart = useSelector(selectAllCart);
  const [addNewOrder, { isLoading, isError, error }] = useAddNewOrderMutation();
  const onSubmit = (data) => {
    addNewOrder({
      ...data,
      items: cart.items,
      totalPrice: cart.totalPrice,
      totalQuantity: cart.totalQuantity,
    })
      .unwrap()
      .then((data) => {
        // Handle successful mutation
        console.log("Order added successfully:", data);
      })
      .catch((error) => {
        // Handle mutation error
        console.log("Error occurred while adding order:", error);
      });
  };
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
                {...field}
              />
            )}
          />
        </Box>
        <Button variant="outlined" size="large" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
export default Form;
