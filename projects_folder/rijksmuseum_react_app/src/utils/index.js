export let queryStringConverter = (queryObj, url) => {
    ///do your logic here
    for (let key in queryObj) {
        url += `${key}=${queryObj[key]}&`
    }
    // return the converted url string
    return url;
}