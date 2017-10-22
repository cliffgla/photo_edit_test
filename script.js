var value = 0
function filter() {
    brightnessValue = $("#brightness-input").val();
    brightVal = parseInt(brightnessValue);
    console.log(brightnessValue);

    brightVal = (brightVal+10)/10.0;

    $("#brightness-value").html("<p>"+ brightnessValue + "</p>");
    $("#photo img").css("filter", "brightness("+ brightVal +")");



}

function changeContrast() {
    value = $("#contrast-input").val();
    val = parseInt(value);
    console.log(value);

    val = (val+10)/10.0;

    $("#contrast-value").html("<p>"+ value + "</p>");
    $("#photo img").css("filter", "contrast("+ val +")");



}
$("input[value]").change(filter);
$("#contrast-input[value]").change(changeContrast);
