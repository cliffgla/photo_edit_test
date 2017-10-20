var value = 0
function changeBright() {
    value = $("#controls input").val();
    $("p").html("<p>"+ value + "</p>");
}



$("input[type=range]").change(changeBright);
