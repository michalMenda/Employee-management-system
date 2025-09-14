import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    colors: {
        brand: {
            50: "#e8f4fd",
            100: "#bee3f8",
            200: "#90cdf4",
            300: "#63b3ed",
            400: "#4299e1",
            500: "#3182ce",
            600: "#2b77cb",
            700: "#2c5aa0",
            800: "#2a4365",
            900: "#1a365d",
        }
    },
    radii: {
        base: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
    }
})

export default customTheme
