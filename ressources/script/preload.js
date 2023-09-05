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
    document.getElementById("clickme").addEventListener("click", fctClicked, false)
}