import { createSwitchNavigator } from "react-navigation"
import Stack from "./Stack"
const Switch = createSwitchNavigator(
    {
        Stack: {
            screen: Stack,
        },
    }
)
export default Switch
