import { Grid, Paper } from "@mui/material";
import TypeMenu from "../components/TypeMenu";
import CardList from "../components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { useGetItemsQuery, useGetTypesQuery } from "../store/operations";
import { useEffect, useState } from "react";
import { setAllTypes } from "../store/slices/typeSlice";
import { setAllItems } from "../store/slices/itemSlice";
import { selectVisibleItems } from "../store/selectors/itemSelectors";

const Shop = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const visibleItems = useSelector(selectVisibleItems);
  const { data: typesData, isLoading: typesLoading } = useGetTypesQuery();
  const { data: itemsData, isLoading: itemsLoading } = useGetItemsQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [items, types] = await Promise.all([itemsData, typesData]);

        dispatch(setAllTypes(types));
        dispatch(setAllItems(items));
        setIsLoading(false);
      } catch (error) {
        console.log("Error occurred while fetching data:", error);
      }
    };
    if (!typesLoading && !itemsLoading) {
      fetchData();
    }
  }, [typesData, dispatch, itemsData, typesLoading, itemsLoading]);

  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={3}>
        <Paper>
          <TypeMenu data={typesData} isLoading={isLoading} />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <CardList data={visibleItems} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};
export default Shop;
