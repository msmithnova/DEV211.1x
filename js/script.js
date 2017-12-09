/*
var slideInterval = 3500;
function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure')
}
function moveForward() {
    var figures = getFigures();
    var numFigs = figures.length;
    for (var i = 0; i < numFigs; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            figures[++i % numFigs].className = 'visible';
            break;
        }
    }
    setTimeout(moveForward, slideInterval);
}
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();
*/