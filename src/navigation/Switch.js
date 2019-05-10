import { createSwitchNavigator } from "react-navigation"
import Stack from "./Stack"
import Modal from "./Modal"
const Switch = createSwitchNavigator(
    {
        Stack: {
            screen: Stack,
        },
        Modal: {
            screen: Modal
        }
    }
)
export default Switch
