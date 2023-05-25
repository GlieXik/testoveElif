import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { CART_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const routes = [
  { path: SHOP_ROUTE, Component: Shop },
  { path: CART_ROUTE, Component: Cart },
];
