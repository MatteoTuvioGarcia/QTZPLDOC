$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        btn = document.getElementById("sidebarCollapse")
        console.log(btn.innerText)
        if (btn.innerText == "<--") {
            btn.innerText = '-->'
        } else {
            btn.innerText = '<--'
        }
    });
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "htmlsnippets/singletons/main.html", false);
    xmlhttp.send();
    document.getElementById('mainpage').innerHTML = xmlhttp.responseText;
});
   
