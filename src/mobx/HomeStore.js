import { observable, flow, action } from "mobx"
import * as service from "../services/services"
class HomeStore {
    @observable pic = "https://facebook.github.io/react/logo-og.png"
    @observable list = []
    @observable tag = []
    @observable loading = true
    constructor() { }


    fetchBing = flow(function* () {
        const data = yield service.getBing()
        if (data.isok) {
            this.pic = data.data
        }
    })


    fetchList = flow(function* (payload) {
        this.afterLoading(true)
        const { pageindex, flesh } = payload
        const data = yield service.getContent({ pageindex: pageindex, pageSize: 10, status: 1 })
        if (data.isok) {
            this.getList(flesh, data.data)
        }
        this.afterLoading(false)
    })

    fetchTag = flow(function* () {
        const data = yield service.getTag()
        if (data.isok) {
            this.tag = data.data
        }
    })

    @action
    afterLoading(payload) {
        this.loading = payload
    }

    @action
    getList(flesh, data) {
        this.list = flesh ? data : [...this.list, ...data]
    }
}

export default HomeStore