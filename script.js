var brightVal;

var contrastVal;

var satVal;


$("input[value]").change(function() {
    //brightness control
    brightVal = $("#brightness-input").val();
    pVal = parseInt(brightVal);
    console.log(brightVal);

    brightVal = (pVal+10)/10.0;

    $("#brightness-value").html("<p>"+ pVal + "</p>");
    $("#photo img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

    //contrast control
    contrastVal = $("#contrast-input").val();
    pVal = parseInt(contrastVal);
    console.log(contrastVal);

    contrastVal = (pVal+10)/10.0;

    $("#contrast-value").html("<p>"+ pVal + "</p>");
    $("#photo img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

    //saturation control
    satVal = $("#saturation-input").val();
    pVal = parseInt(satVal);
    console.log(contrastVal);

    satVal = (pVal+10)/10.0;

    $("#saturation-value").html("<p>"+ pVal + "</p>");
    $("#photo img").css("filter", "brightness("+ brightVal +") contrast("+ contrastVal +") saturate(" + satVal + ")");

});
