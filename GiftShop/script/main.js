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
    ["splootybean NFT", splooty_action => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }],
    ["RickCP3 New Album", new_album_action => {
        window.location.href = "https://open.spotify.com/album/3BR3JDrchE58Bc36i9raMq"
    }]
]
const spend_sound = new Audio("../sfx/SpendPoints.wav")
rewardPoints()
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
function purchaseButton(itemId, price, oncePurchase=true) {
    if (pingvin_points < price) {
        return;
    }
    if (oncePurchase) {
        var button = document.getElementById("p_" + itemId)
        button.innerHTML = "Purchased!"
        button.disabled = true
        button.className = "p_purchase_disabled"
    }
    pingvin_points -= price
    console.log("purchased: " + items[itemId][0] + " for " + price)
    items[itemId][1].call()
    set_pointtext()
    spend_sound.pause()
    spend_sound.currentTime = 0
    spend_sound.playbackRate = Math.random() * (2 - 0.75) + 0.75
    spend_sound.play()
}
function rewardPoints() {
    pingvin_points += Math.floor(Math.random() * 1000)
    set_pointtext()
    setTimeout(rewardPoints, Math.floor(Math.random() * 10000))
}