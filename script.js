var value = 0
function changeBright() {
    value = $("#controls input").val();
    val = parseInt(value);
    console.log(value);

    val = (val+10)/10.0;

    $("p").html("<p>"+ value + "</p>");
    $("#photo img").css("filter", "brightness("+ val +")");



}

$("input[type=range]").change(changeBright);
