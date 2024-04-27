if (window.screen.width <= 1000) {
    window.location.href = "../index.html"
}

const items = [
    ["epic quest pingvin", pingvin_action => {
        console.log("no thank you")
    }],
    ["TheLostLeaks", tll_action => {
        window.location.href = "../TheLostLeaks/tll_zip/Release_Launcher.7z"
    }],
    ["Kasper", kasper_action => {
        window.location.href = "./kasper.html"
    }],
]
pingvin_points = 1000
set_pointtext()
if (Math.floor(Math.random() * 100) < 75)
    document.getElementById("generatePoints").hidden = true
if (Math.floor(Math.random() * 100) < 75)
    document.getElementById("pi_kasper").outerHTML = ""

function generatePoints() {
    pingvin_points += Math.floor(Math.random() * 1000)
    set_pointtext()
    // hehehe
    if (Math.floor(Math.random() * 100) < 10)
        document.getElementById("generatePoints").hidden = true
}
function backToPingvin() {
    window.location.href = "../index.html"
}
function set_pointtext() {
    document.getElementById("pingvin_points").innerHTML = "active pingvin points: " + pingvin_points
}
function purchaseButton(itemId, price) {
    if (pingvin_points < price) {
        return;
    }
    pingvin_points -= price
    var button = document.getElementById("p_" + itemId)
    console.log("purchased: " + items[itemId][0] + " for " + price)
    items[itemId][1].call()
    button.innerHTML = "Purchased!"
    button.disabled = true
    button.className = "p_purchase_disabled"
    set_pointtext()
}