function handleLoaf(){
    var grade;
    var flecha = document.querySelector('.man1')
    var Med = document.querySelector('.num')

function handleRotate(){

    grade = Match.floor(Math.random()*(360));
    flecha.style.transform ='rotate('+grade+'deg)';
    Med.textContent = grade;

}
setInterval(handleRandom,3000)

}
window.addEventListener('load', handLoad);