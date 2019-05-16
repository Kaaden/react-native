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
            // const regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi");
            // data.content = data.content.replace(regex1, "$2 style=\"\"$3");
            // const regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi");
            // data.content = data.content.replace(regex2, "$2display:block;height:300px;width:100%;$3");
            data.content = data.content.replace(/↵/g, "");
            payload = data
        }
        this.data = payload
    }
}

export default DetailStore