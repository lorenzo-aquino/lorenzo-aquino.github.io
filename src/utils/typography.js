import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = () => ({
    'a': {
        backgroundImage: "none",
        textShadow: "none",
        color: "#b80c09"
    }
})

const typography = new Typography(fairyGatesTheme)

export const { scale, rhythm, options } = typography
export default typography
