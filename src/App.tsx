import { RouterProvider } from "react-router-dom";
import router from "./router";
import ThemeProvider from "./provider/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
