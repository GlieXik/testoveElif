import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slices/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          mb: 2,
        }}
      >
        <CardMedia
          sx={{ height: 200, width: 200 }}
          image={process.env.REACT_APP_BASE_URL + "/" + data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data.price}
          </Typography>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => dispatch(removeItemFromCart(data.name))}
              >
                -
              </Button>
              <Typography fontSize={36} margin={2}>
                {data.quantity}
              </Typography>
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => dispatch(addItemToCart(data))}
              >
                +
              </Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default CartItem;
