function fctClicked(evt) {
    let replace = document.getElementById(evt.target.id)
    replace.innerHTML = '<iframe width="975" height="731" src="https://www.youtube.com/embed/Oe3FG4EOgyU?autoplay=1&loop=1&playlist=Oe3FG4EOgyU" title="Schnappi Das Kleine Krokodil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"web-share" allowfullscreen> </iframe>';
}

function loadPage(href) {
    console.log(href)
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    document.getElementById('mainpage').innerHTML = xmlhttp.responseText;

    let clickme = document.getElementById("clickme")
    if (clickme != null) {
        clickme.addEventListener("click", fctClicked, false)
    }
    let zplPage;
    zplPage = document.getElementById("zplWrapper");

    if (zplPage != null) {
        loadZplElement(zplPage)

    }
}

async function loadZplElement(element) {


    let zplPrefix = 'label';
    let zplSuffix = '.ZPL';
    let constructedFileName;
    let I = 1;
    while (I <= 20) {

        //needed otherwise javascript is too fast and labels get confusedly fucked up
        await sleep(10);

        constructedFileName = zplPrefix + I + zplSuffix;
        $.ajax({
            url: 'ressources/zplscripts/' + constructedFileName,
            success: async function (data) {
                let count = document.getElementsByClassName("card_custom").length + 1
                let newLabel;
                newLabel = document.createElement('div');
                newLabel.id = count
                let labelName = data.substring(1, data.search('\n')).substring(18, 70)
                let filename = data.substring(1, data.search('\n')).substring(3, 18)
                data = data.substring(data.search('\n') + 1, data.length)
                newLabel.innerHTML = "<div class=\"border row rounded card_custom\">\n" +
                    "    <div class=\"bg-dark text-light rounded p-2\">\n" +
                    `        <h2>Snippet ${count}: ${labelName}</h2>\n` +
                    "    </div>\n" +
                    "    <div class=\"bg-light pt-2 card_custom_inside\">\n" +
                    "        <div class=\"zplcode\">\n" +
                    "            <p class=\"zplsourcefile\" id=\"label2\">\n" +
                    `${data.replaceAll("\n", "<br/>")}` +
                    "            </p>\n" +
                    "        </div>\n" +
                    `        <a href="ressources/zplscripts/${filename.replaceAll(" ", '')}" download>\n` +
                    "            <button type=\"button\" class=\"btn btn-dark\">\n" +
                    "                <span>download as .ZPL</span>\n" +
                    "            </button>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>"
                element.append(newLabel)

            }
        }
        );
        I++;
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function doAjaxThings() {
    // await code here
    let param = 'htmlsnippets/singletons/about.html'
    let xmlhttp = new XMLHttpRequest();
    let result = xmlhttp.open("GET", param, true);

    // code below here will only execute when await makeRequest() finished loading
    console.log(result);
}
document.addEventListener("DOMContentLoaded", function () {
    doAjaxThings();

});
async function loadFromUrlPage(param) {

    // document.getElementById('mainpage').innerHTML = xmlhttp.responseText;
    //
    // console.log('param')

}
function windowLoadEvt() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pageToLoad = urlParams.get('page')
    console.log(pageToLoad)
    loadFromUrlPage(pageToLoad);

}

if (window.addEventListener) {
    window.addEventListener('load', windowLoadEvt, false); //W3C
} else {
    window.attachEvent('onload', windowLoadEvt); //IE
}

