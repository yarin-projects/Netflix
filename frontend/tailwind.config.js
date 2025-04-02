/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greygrey-50": "var(--greygrey-50)",
        "greygrey-10": "var(--greygrey-10)",
        "greygrey-100": "var(--greygrey-100)",
        "greygrey-200": "var(--greygrey-200)",  
        "greygrey-350": "var(--greygrey-350)",
        "greygrey-700": "var(--greygrey-700)",
        "greygrey-800": "var(--greygrey-800)",
        "greygrey-850": "var(--greygrey-850)",
        "secondaryred-300": "var(--secondaryred-300)",
        primaryblack: "var(--primaryblack)",
        primaryred: "var(--primaryred)",
        primarywhite: "var(--primarywhite)",
        "transparent-white20": "var(--transparent-white20)",
        "transparent-white35": "var(--transparent-white35)",
        "transparent-white70": "var(--transparent-white70)",
        "transparentblack-60": "var(--transparentblack-60)",
      },
      fontFamily: {
        "bold-title1": "var(--bold-title1-font-family)",
        "medium-body": "var(--medium-body-font-family)",
        "medium-smallbody": "var(--medium-smallbody-font-family)",
        "regular-body": "var(--regular-body-font-family)",
        "regular-caption2": "var(--regular-caption2-font-family)",
        "regular-smallbody": "var(--regular-smallbody-font-family)",
        "regular-title2": "var(--regular-title2-font-family)",
        "regular-title3": "var(--regular-title3-font-family)",
      },
    },
  },
  plugins: [],
};
