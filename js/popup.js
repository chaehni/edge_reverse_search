let google = document.getElementById('google');
let bing = document.getElementById('bing');
let tineye = document.getElementById('tineye');
let bg = browser.extension.getBackgroundPage();

let engine = browser.storage.local.get("engine", function (data) {
    if (!data["engine"]) { // Check for engine is undefined
        google.checked = true;
    } else {
        document.getElementById(data["engine"]).checked = true;
    }
});

google.onclick = function () {
    bg.set_engine("google");
};

bing.onclick = function () {
    bg.set_engine("bing");
};

tineye.onclick = function () {
    bg.set_engine("tineye");
};
