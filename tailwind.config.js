module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    corePlugins: { preflight: true },
    theme: {
      extend: {
        fontFamily: {
          "profilekosh-framer-website-inter-regular":
            "var(--profilekosh-framer-website-inter-regular-font-family)",
          "profilekosh-framer-website-pixelify-sans-bold":
            "var(--profilekosh-framer-website-pixelify-sans-bold-font-family)",
          "profilekosh-framer-website-pixelify-sans-regular":
            "var(--profilekosh-framer-website-pixelify-sans-regular-font-family)",
          "profilekosh-framer-website-potta-one-regular":
            "var(--profilekosh-framer-website-potta-one-regular-font-family)",
          "profilekosh-framer-website-raleway-bold":
            "var(--profilekosh-framer-website-raleway-bold-font-family)",
          "profilekosh-framer-website-raleway-extrabold":
            "var(--profilekosh-framer-website-raleway-extrabold-font-family)",
          "profilekosh-framer-website-raleway-regular":
            "var(--profilekosh-framer-website-raleway-regular-font-family)",
        },
      },
    },
    plugins: [],
  };