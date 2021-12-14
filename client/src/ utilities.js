// to create the short url
export function createShortUrl() {
    let res = "";
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let char = 0; char <= 5; char++) {
        res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return res;
}
