const err = { isok: false, msg: "fail" }
export default async function request(url, body) {
    // let res
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(body),
        })
            .then((data) => {
                if (data.ok) {
                    resolve(JSON.parse(data._bodyText || data._bodyInit) || err)
                } else {
                    resolve(err)
                }
            })
            .catch((error) => {
                resolve(err)
            });
    })
}