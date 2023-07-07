import { ThemeProvider } from "@mui/material/styles";
import { applicationtheme } from "./expanded-theme";
import { DesktopLayout } from "./components/desktop/desktop-screen/desktop";
import { Mobile } from "./components/mobile/mobile/mobile";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the window width when the viewport is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <ThemeProvider theme={applicationtheme}>
       {windowWidth > 900 ? <DesktopLayout /> : <Mobile /> }
       
      </ThemeProvider>
    </>
  );
}

export default App;
