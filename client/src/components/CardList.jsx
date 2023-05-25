import { Grid } from "@mui/material";
import CardItem from "./CardItem";

const CardList = ({ data, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Grid container columnSpacing={2} rowGap={2}>
        {data.map(({ name, img, _id, price }, key) => (
          <Grid key={key} item md={4} xs={6}>
            <CardItem name={name} image={img} id={_id} price={price}></CardItem>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardList;
