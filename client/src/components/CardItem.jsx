import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";

const CardItem = ({ name, id, image, price }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={process.env.REACT_APP_BASE_URL + "/" + image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => dispatch(addItemToCart({ name, price, image }))}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default CardItem;
