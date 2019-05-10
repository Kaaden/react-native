import HomeStore from "./HomeStore"
import SearchStore from "./SearchStore"

class RootStore {
    constructor() {
        this.HomeStore = new HomeStore(this)
        this.SearchStore = new SearchStore(this)
    }
}
export default new RootStore()