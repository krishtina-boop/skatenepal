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
          "50": "#FBC2B2",
          "100": "#F02C2B",
        },
        secondary: {
          "200": "#1B2740",
        },
      },
      backgroundImage: {
        "home-hero": "url('/assets/skates-hero.png')",
        "home-explore": "url('/assets/explore.png')",
      },
    },
  },
  plugins: [],
};
export default tailwindConfig;
