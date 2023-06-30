import { createTheme } from "@mui/material/styles";
export const applicationtheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          // Aqui você pode definir os estilos do input
          // Por exemplo, para alterar a cor de fundo:
          // Ou para alterar a cor do texto:
          // E assim por diante
        },
      },
    },
  },
  palette: {
    primary: {
      main: "hsl(243, 100%, 62%)",
    },
   
  },
});
