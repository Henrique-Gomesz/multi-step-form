import { ThemeProvider } from "@mui/material/styles";
import { applicationtheme } from "./expanded-theme";
import { DesktopLayout } from "./components/desktop/desktop-screen/desktop";
import { Mobile } from "./components/mobile/mobile/mobile";

function App() {
  return (
    <>
      <ThemeProvider theme={applicationtheme}>
        {/* <DesktopLayout/> */}
        <Mobile />
      </ThemeProvider>
    </>
  );
}

export default App;
