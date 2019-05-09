import request from "./utils"
const HOST = "http://kaaden.orrzt.com/api/"
// const HOST = "http://127.0.0.1:80/"
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
    findImg: HOST + "findImg"
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