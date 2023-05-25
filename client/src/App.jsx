import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import { Container, CssBaseline } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CssBaseline />
          <Container>
            <NavBar />
            <AppRouter />
          </Container>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
