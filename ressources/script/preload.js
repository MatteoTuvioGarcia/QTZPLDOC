function fctClicked(evt) {
    let replace = document.getElementById(evt.target.id)
    replace.innerHTML = '<iframe width="910" height="607" src="https://www.youtube.com/embed/u5Ho1trvlro?autoplay=1&loop=1&playlist=u5Ho1trvlro" ' +
        'title="petit poney officiel clip" frameborder="0" ' +
        'allow="accelerometer; autoplay; clipboard-write; ' +
        'encrypted-media; gyroscope; picture-in-picture; web-share" ' +
        'allowfullscreen></iframe>'
}

function loadPage(href) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    document.getElementById('mainpage').innerHTML = xmlhttp.responseText;

    clickme = document.getElementById("clickme")
    console.log(clickme)
    if (clickme != null) {
        console.log('Aded')
        clickme.addEventListener("click", fctClicked, false)
    }
    zplPage = document.getElementById("zplWrapper");

    if (zplPage != null) {
        loadZplElement(zplPage)

    }
}

function loadZplElement(element) {


    let zplData;
    let zplPrefix = 'label';
    let zplSuffix = '.ZPL';
    let constructedFileName;
    let I = 1;
    let stop = false;
    while (I <= 4) {

        constructedFileName = zplPrefix + I + zplSuffix;
        console.log(constructedFileName)
        $.ajax({
            url: 'ressources/zplscripts/' + constructedFileName,
            success: function (data) {
                let count = document.getElementsByClassName("card_custom").length + 1
                let newLabel = document.createElement('div')
                let labelName = data.substring(1, data.search('\n')).substring(18,70)
                let filename = data.substring(1, data.search('\n')).substring(3,18)
                console.log(filename)
                console.log(labelName)
                data = data.substring(data.search('\n') + 1, data.length)
                newLabel.innerHTML = "<div class=\"border row rounded card_custom\">\n" +
                    "    <div class=\"bg-dark text-light rounded p-2\">\n" +
                    "        <h2>Snippet " + count +": "+ labelName +"</h2>\n" +
                    "    </div>\n" +
                    "    <div class=\"bg-light pt-2 card_custom_inside\">\n" +
                    "        <div class=\"zplcode\">\n" +
                    "            <p class=\"zplsourcefile\" id=\"label2\">\n" +
                    data.replaceAll("\n", "<br/>") +
                    "            </p>\n" +
                    "        </div>\n" +
                    "        <a href=\"ressources/zplscripts/" + filename.replaceAll(" ", '') + "\" download>\n" +
                    "            <button type=\"button\" class=\"btn btn-dark\">\n" +
                    "                <span>download as .ZPL</span>\n" +
                    "            </button>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>"
                element.append(newLabel)
            }

        });
        I++;
    }

}

function readZpl(id) {

}