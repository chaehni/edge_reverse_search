const google_url = "http://www.google.com/searchbyimage?image_url=";
const bing_url = "https://www.bing.com/images/searchbyimage?cbir=ssbi&pageurl=http%3A%2F%2Fwww.squobble.com&imgurl=";
const tineye_url = "https://tineye.com/parse?url=";
let engine = browser.storage.local.get("engine", function (data) {
    return data["engine"];
});

browser.contextMenus.create({
    id: "reverse-search",
    title: "Image reverse search",
    contexts: ["image"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    url = ""
    switch (engine) {
        case "google":
            url = google_url + info.srcUrl;
            break;
        case "bing":
            url = bing_url + info.srcUrl;
            break;
        case "tineye":
            url = tineye_url + info.srcUrl;
            break;
        default:
            url = google_url + info.srcUrl;
    }
    browser.tabs.create({
        url: url
    });
});

function set_engine(eng) {
    engine = eng;
    browser.storage.local.set({ engine: eng });
}
