// var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var numb = 0,
    numb1 = 1,
    sent = 0;

// $(document).ready(function() {
//     $("#keyboard-upper-container").hide();
//     $(document).keydown(function (shift){
//         if (shift.which==16) {$("#keyboard-upper-container").show();
//         $("#keyboard-upper-container").show();
//         $("#keyboard-lower-container").hide();       
//         }
//     })
//     $(document).keyup(function (shift){
//         if (shift.which==16) {$("#keyboard-upper-container").show();
//         $("#keyboard-upper-container").hide();
//         $("#keyboard-lower-container").show();       
//         }
//     })
//     $(document).keypress(function(e) {
//         $("#" + e.which).css("background-color", "#00bfff");
//     });
//     $(document).keyup(function(e) {
//         var num = (document).getElementsByClassName("key")
//         if (num.backgroundColor = "#00bfff") {
//             $(num).css("background-color", "#f5f5f5");
//         }
//     });
    $("#target-letter").text(sentences[sent].charAt(0));
    var n = sentences[sent].charAt(numb++);
    $("#feedback").append("<span class='glyphicon'></span>")
    $(document).keypress(function(e) {
        $("#sentence").text(sentences[sent])
        var a = String.fromCharCode(e.which);
        if (a === n) {
            n = sentences[sent].charAt(numb++);
            var n1 = sentences[sent].charAt(numb1++);
            $("#target-letter").text(n1);
            $(".glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok")
            var sentlen = sentences[sent].length;
        } else {
            $(".glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-remove")
        }
        if (numb === sentences[sent].length){
            sent = 1;
            numb = 0
            numb1 = 1;
            console.log("sdf");
        }
    });
// });