import { observable, flow, action } from "mobx"
import * as service from "../services/services"
class DetailStore {
    @observable data = ""
    @observable loading = true
    fetchDetail = flow(function* (payload) {
        this.afterLoading(true)
        const data = yield service.detail({ ...payload })
        this.doData(data.isok, data.data)
        this.afterLoading(false)

    })

    @action
    afterLoading(payload) {
        this.loading = payload
    }
    @action
    doData(isok, data) {
        this.data = isok ? data : ""
    }
}

export default DetailStore