var value = 0
function changeBright() {
    value = $("#brightness-input").val();
    val = parseInt(value);
    console.log(value);

    val = (val+10)/10.0;

    $("#brightness-value").html("<p>"+ value + "</p>");
    $("#photo img").css("filter", "brightness("+ val +")");



}

function changeContrast() {
    value = $("#contrast-input").val();
    val = parseInt(value);
    console.log(value);

    val = (val+10)/10.0;

    $("#contrast-value").html("<p>"+ value + "</p>");
    $("#photo img").css("filter", "contrast("+ val +")");



}
$("#brightness-input[value]").change(changeBright);
$("#contrast-input[value]").change(changeContrast);
