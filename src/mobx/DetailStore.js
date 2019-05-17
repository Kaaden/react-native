import { observable, flow, action } from "mobx"
import * as service from "../services/services"
class DetailStore {
    @observable data = ""
    @observable loading = true
    fetchDetail = flow(function* (payload) {
        this.afterLoading(true)
        const data = yield service.detail({ ...payload })
        this.doData(data.data)
        this.afterLoading(false)

    })

    @action
    afterLoading(payload) {
        this.loading = payload
    }
    @action
    doData(data) {
        let payload = ""
        if (data) {
            data.content = data.content.replace(/↵/g, "");
            payload = data
        }
        this.data = payload
    }
}

export default DetailStore