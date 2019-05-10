import { createStackNavigator } from "react-navigation"
import Search from "../page/search/index"
const Modal = createStackNavigator(
    {
       
        Search: {
            screen: Search,
        },
    },
    {
        mode: "modal",
        headerMode: "none",
    }
)
export default Modal
