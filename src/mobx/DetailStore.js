import { observable, flow, action } from "mobx"
import * as service from "../services/services"
class DetailStore {
    @observable data = ""

    fetchDetail = flow(function* (payload) {
        const data = yield service.detail(payload)
        console.log(data)

    })
}

export default DetailStore