var myAudio1=document.getElementById('audio1');
var myAudio2=document.getElementById('audio2');
var myAudio3=document.getElementById('audio3');
var myAudio4=document.getElementById('audio4');
var myAudio5=document.getElementById('audio5');

function playPause1()
{
    myAudio1.play();
    $('.play1').hide();
    $('.mt').append('<span class="glyphicon glyphicon-pause stop1" onclick="playStop()">'+'</span>');
}

function playStop(){
    myAudio1.pause();
    $('.stop1').hide();
    $('.play1').show();
}

function collection() {
    $('#notCollection').hide();
    $('.bt').append('<span class="glyphicon glyphicon-star" id="collection" onclick="notCollection()">' + '</span>');

}
function notCollection(){
    $('#collection').hide();
    $('#notCollection').show();
}




function playPause2()
{
    myAudio2.play();
    $('.play2').hide();
    $('.mt2').append('<span class="glyphicon glyphicon-pause stop2" onclick="playStop2()">'+'</span>');
}

function playStop2(){
    myAudio2.pause();
    $('.stop2').hide();
    $('.play2').show();
}
function collection2(){
    if($('#notCollection2').length>0){
        $('#notCollection2').remove();
        $('.bt2').append('<span class="glyphicon glyphicon-star" id="collection2" onclick="collection2()">'+'</span>');
    }else{
        $('#collection2').remove();
        $('.bt2').append('<span class="glyphicon glyphicon-star-empty" id="collection2" onclick="collection2()">'+'</span>');
    }
}

function playPause3()
{
    myAudio3.play();
    $('.play3').hide();
    $('.mt3').append('<span class="glyphicon glyphicon-pause stop3" onclick="playStop3()">'+'</span>');
}

function playStop3(){
    myAudio3.pause();
    $('.stop3').hide();
    $('.play3').show();
}

function playPause4()
{
    myAudio4.play();
    $('.play4').hide();
    $('.mt4').append('<span class="glyphicon glyphicon-pause stop4" onclick="playStop4()">'+'</span>');
}

function playStop4(){
    myAudio4.pause();
    $('.stop4').hide();
    $('.play4').show();
}

function playPause5()
{
    myAudio5.play();
    $('.play5').hide();
    $('.mt5').append('<span class="glyphicon glyphicon-pause stop5" onclick="playStop5()">'+'</span>');
}

function playStop5(){
    myAudio5.pause();
    $('.stop5').hide();
    $('.play5').show();
}