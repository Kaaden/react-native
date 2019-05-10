import request from "./utils"
const HOST = "http://kaaden.orrzt.com/api/"
// const HOST = "http://127.0.0.1:8080/"
const addr = {
    bing: HOST + "getBing",
    config: HOST + "getConfig",
    content: HOST + "getContent",
    tag: HOST + "getTags",
    user: HOST + "getUser",
    detail: HOST + "getDetail",
    token: HOST + "getToken_access",
    gitUser: HOST + "getGitUser",
    getComment: HOST + "getComment",
    addComment: HOST + "addComment",
    addReplay: HOST + "addReplay",
    findComment: HOST + "findComment",
    changeDz: HOST + "changeDz",
    findDzCount: HOST + "findDzCount",
    updateView: HOST + "updateView",
    findImg: HOST + "findImg",
    searchContent: HOST + "searchContent"
};


export const getBing = () => {
    return request(addr.bing)
}
export const getContent = (data) => {
    return request(addr.content, data)
}
export const getTag = () => {
    return request(addr.tag)
}
export const search = (data) => {
    return request(addr.searchContent, data)
}