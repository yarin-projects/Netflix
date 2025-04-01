/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greygrey-10": "var(--greygrey-10)",
        "greygrey-100": "var(--greygrey-100)",
        "greygrey-200": "var(--greygrey-200)",
        "greygrey-700": "var(--greygrey-700)",
        "greygrey-800": "var(--greygrey-800)",
        "greygrey-850": "var(--greygrey-850)",
        "secondaryred-300": "var(--secondaryred-300)",
      },
      fontFamily: {
        "bold-title1": "var(--bold-title1-font-family)",
        "medium-body": "var(--medium-body-font-family)",
        "medium-smallbody": "var(--medium-smallbody-font-family)",
        "regular-caption2": "var(--regular-caption2-font-family)",
        "regular-smallbody": "var(--regular-smallbody-font-family)",
        "regular-title2": "var(--regular-title2-font-family)",
        "regular-title3": "var(--regular-title3-font-family)",
      },
    },
  },
  plugins: [],
};
