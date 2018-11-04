const shareButton = document.getElementById("share");
function tweet() {
    var url = "https://twitter.com/intent/tweet";
    var text = document.getElementById("results").textContent;
    var via = "lukazko";
    window.open(url + "?text=" + text + ";via=" + via, 'height=340,width=660');
}

shareButton.addEventListener("click", tweet);