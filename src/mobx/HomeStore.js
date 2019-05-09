import { observable, flow, reaction, computed, action } from "mobx"
import * as service from "../services/services"
export default class HomeStore {
    @observable pic = "https://facebook.github.io/react/logo-og.png"
    @observable list = []
    @observable tag = []
    @observable loading=true
    constructor() { }


    fetchBing = flow(function* () {
        const data = yield service.getBing()
        if (data.isok) {
            this.pic = data.data
        }
    })


    fetchList = flow(function* (payload) {
        this.loading=true
        const { pageindex, flesh } = payload
        const data = yield service.getContent({ pageindex: pageindex, pageSize: 10, status: 1 })
        if (data.isok) {
            this.list = flesh ? data.data : [...this.list, ...data.data]
        }
        this.loading=false
    })

    fetchTag = flow(function* () {
        const data = yield service.getTag()
        if (data.isok) {
            this.tag = data.data
        }
    })


}