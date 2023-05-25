import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { selectAllCart } from "../store/selectors/cartSelectors";
import Form from "../components/Form";

const Cart = () => {
  const cartData = useSelector(selectAllCart);

  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={4}>
        <Paper>
          <Form />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        {cartData.items.map((item, indx) => {
          return <CartItem key={indx} data={item} />;
        })}
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5">
            Total Price: {cartData.totalPrice}
          </Typography>
          <Button variant="outlined" size="large">
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cart;
