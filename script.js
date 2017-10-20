var value = 0
function changeBright() {
    value = $("#controls input").val();

    $("p").html("<p>"+ value + "</p>");
    $("#photo img").css("filter", "brightness("+ value +")");



}

$("input[type=range]").change(changeBright);
