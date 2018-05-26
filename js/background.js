browser.contextMenus.create({
    id: "reverse-search",
    title: "Google image reverse search",
    contexts: ["image"]
});

browser.contextMenus.create({
    id: "image-url",
    title: "Image URL",
    contexts: ["image"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "reverse-search") {
        browser.tabs.create({
            url: "http://www.google.com/searchbyimage?image_url=" + info.srcUrl
        });
    } else if (info.menuItemId == "image-url") {
        alert(info.srcUrl);
    }
});