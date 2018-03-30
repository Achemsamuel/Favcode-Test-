
 var slideInterval = 2500;
function getFigures() {
return document.getElementById('carousel').getElementsByTagName('figure');
}
function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();
$('#carousel').hover(function(){
   $("#carousel").carousel('pause');
},function(){
   $("#carousel").carousel('cycle');
});
