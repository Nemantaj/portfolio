import { NextUIProvider, createTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import App from "./App";

const Theme = () => {
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {},
  });

  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <App />
    </NextUIProvider>
  );
};

export default Theme;
