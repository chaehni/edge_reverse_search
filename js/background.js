const google_url = "http://www.google.com/searchbyimage?image_url=";
const bing_url = "https://www.bing.com/images/searchbyimage?cbir=ssbi&pageurl=http%3A%2F%2Fwww.squobble.com&imgurl=";
var engine = 'google'

browser.contextMenus.create({
    id: "reverse-search",
    title: "Image reverse search",
    contexts: ["image"]
});

browser.contextMenus.create({
    id: "image-url",
    title: "Image URL",
    contexts: ["image"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "reverse-search") {
        url = ""
        switch (engine){
            case "google":
                url = google_url + info.srcUrl;
                break;
            case "bing":
                url = bing_url + info.srcUrl;
                break;
            default:
                url = google_url + info.srcUrl; 
        }
        browser.tabs.create({
            url: url
        });

    } else if (info.menuItemId == "image-url") {
        alert(info.srcUrl);
    }
});

function set_engine (eng){
    engine = eng;
}