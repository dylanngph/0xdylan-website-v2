export const lightTheme = {
  elements: {
    card: {
      backgroundColor: "rgba(250,250,250, .05)",
      border: "1px solid rgba(255,255,255, .1)",
      boxShadow: "none",
      backdropFilter: "blur(30px)",
    },
    socialButtonsIconButton: {
      borderColor: "rgba(255,255,255, .1)",
      backgroundColor: "rgba(250,250,250, .05)",
      "&:hover": {
        backgroundColor: "rgba(250,250,250, .1)",
      },
    },
    dividerLine: {
      backgroundColor: "rgba(255,255,255, .1)",
    },
    providerIcon__github: { filter: "invert(1)" },
    providerIcon__apple: { filter: "invert(1)" },
    activeDeviceIcon: {
      "--cl-chassis-bottom": "#d2d2d2",
      "--cl-chassis-back": "#e6e6e6",
      "--cl-chassis-screen": "#e6e6e6",
      "--cl-screen": "#111111",
    },
  },
  variables: {
    colorPrimary: "#FEA55F",
    colorText: "white",
    borderRadius: "2px",
    colorInputBackground: "transparent",
    colorInputText: "white",
    colorAlphaShade: "white",
    colorShimmer: "rgba(255,255,255,0.36)",
  },
};

export const authTheme = () => {
  return lightTheme;
};
