var seg = 00 ;
var min = 00 ;
var hr = 00;
var intervalo;

function two(digit){
    if( digit < 10 ){
    return ('0' + digit)
}else{
    return(digit)
}
}
function start(){
    intervalo = setInterval(relogio,1);
}

function pausar(){
    clearInterval(intervalo);
}

function reset(){
    clearInterval(intervalo);
    seg = 00;
    min = 00;
    hr = 00;
    document.getElementById('watch').innerText = '00:00:00';
}
function relogio(){
    seg++;
    if(seg == 60){
        min++
        seg = 00;
            if(min == 60){
                min = 00;
                hr++
            }   
    }
    document.getElementById('watch').innerText = two(hr)+':'+two(min)+':'+two(seg)
}