let google = document.getElementById('google');
let bing = document.getElementById('bing');
let bg = browser.extension.getBackgroundPage();

google.onclick = function() {
    bg.set_engine("google");
};

bing.onclick = function() {
    bg.set_engine("bing");
};
