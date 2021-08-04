$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle(5000);
        $("#div2").fadeToggle(3000);
        $("#div3").fadeToggle(1000);
        $("#div4").fadeToggle();
    });
});