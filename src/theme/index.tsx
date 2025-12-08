import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
      paper: "#171717",
    },
    text: {
      primary: "#ededed",
      secondary: "#94a3b8",
    },
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1e293b",
      contrastText: "#ffffff",
    },
    divider: "#262626",
    info: {
      main: "#22d3ee",
      contrastText: "#0f172a",
    },
  },

  typography: {
    fontFamily: "JetBrains Mono, monospace",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          background-color: #0a0a0a;
          color: #ededed;
          font-family: 'Inter', sans-serif;
        }

        /* Custom Animations */
        @keyframes text-reveal {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-text-reveal {
          animation: text-reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `,
    },
  },
});

export default theme;
