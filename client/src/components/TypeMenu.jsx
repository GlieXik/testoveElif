import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveType } from "../store/selectors/typeSelectors";
import { setActiveType } from "../store/slices/typeSlice";
import { Box, Skeleton } from "@mui/material";

const TypeMenu = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  const active = useSelector(selectActiveType);
  if (isLoading) {
    return (
      <Box sx={{ maxWidth: "100%", p: 2 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }
  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <MenuList>
        {data.map(({ name, _id: id }) => (
          // key uniqu by default from mongo module
          <MenuItem
            key={name}
            onClick={() => dispatch(setActiveType(id))}
            selected={active === id}
          >
            <ListItemText>{name}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};
export default TypeMenu;
