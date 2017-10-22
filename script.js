var value = 0
function changeBright() {
    value = $("input").val();
    val = parseInt(value);
    console.log(value);

    val = (val+10)/10.0;

    $("#brightness-value").html("<p>"+ value + "</p>");
    $("#photo img").css("filter", "brightness("+ val +")");



}

$("input[type=range]").change(changeBright);
