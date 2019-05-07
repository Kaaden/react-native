import HomeStore from "./HomeStore"

class RootStore {
    constructor() {
        this.HomeStore = new HomeStore(this)
    }
}
export default new RootStore()