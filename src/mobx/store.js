import HomeStore from "./HomeStore"
import SearchStore from "./SearchStore"
import DetailStore from "./DetailStore"
class RootStore {
    constructor() {
        this.HomeStore = new HomeStore(this)
        this.SearchStore = new SearchStore(this)
        this.DetailStore=new DetailStore(this)
    }
}
export default new RootStore()