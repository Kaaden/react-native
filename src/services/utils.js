const err = { isok: false, msg: "fail" }
export default async function request(url, body) {
    let res
    try {
        const data = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(body),
        })
        if (data.ok) {
            res = JSON.parse(data._bodyText || data._bodyInit) || err
        } else {
            res = err
        }
    } catch (err) {
        res = err
    }
    return res

}