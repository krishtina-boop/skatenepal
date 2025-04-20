const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#E6EAEF",
        primary: {
          "50": "#deeaf4",
          "100": "#F02C2B",
        },
        secondary: {
          "200": "#1B2740",
        },
        gray: {
          "50": "#C1C7CB",
          "100": "#B0B1BB",
          "200": "#788390",
          "300": "#5F5F66",
          "400": "#393C45",
          "500": "#16181E",
        },
        hover: {
          "100": "#CB2322",
        },
      },
      backgroundImage: {
        "home-hero": "url('/assets/skates-hero.png')",
        "home-explore": "url('/assets/explore.png')",
        "home-discover": "url('/assets/discover-image.png')",
        "nav-gradient": "linear-gradient(to right, #21344B, #C73E4D)",
      },
      fontFamily: {
        worksans: ['"WorkSans","sans-serif"'],
      },
      fontSize: {
        "header-lg": ["70px", { fontWeight: "bold" }, { fontStyle: "italic" }],
        "header-sm": ["56px", { fontWeight: "bold" }, { fontStyle: "italic" }],
        "text-lg": ["18px"],
        "text-sm": ["16px"],
      },
    },
  },
  plugins: [],
};
export default tailwindConfig;
