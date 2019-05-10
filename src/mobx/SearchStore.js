import { observable, flow, action } from "mobx"
import * as service from "../services/services"
class SearchStore {
    @observable result = []
    @observable loading = false
    @observable isok = true
    constructor() { }




    fetchSearch = flow(function* (payload) {
        this.LoadingStar(true)
        const data = yield service.search({ title: payload })
        this.DoResult(data.isok, data.data)
        this.LoadingStar(false)
    })

    @action
    clearResult() {
        this.result = []
        this.isok = true
        this.loading = false
    }
    @action
    LoadingStar(payload) {
        this.loading = payload
    }

    @action
    DoResult(isok, data) {
        this.result = isok ? data : []
        this.isok = isok
    }


}
export default SearchStore