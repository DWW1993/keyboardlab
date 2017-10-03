var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$(document).ready(function() {
    $("#keyboard-upper-container").hide();
    $(document).keydown(function (shift){
        if (shift.which==16) {$("#keyboard-upper-container").show();
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();       
        }
    })
    $(document).keyup(function (shift){
        if (shift.which==16) {$("#keyboard-upper-container").show();
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();       
        }
    })
    $(document).keypress(function(e) {
        $("#" + e.which).css("background-color", "#00bfff");
    });
    $(document).keyup(function(e) {
        var num = (document).getElementsByClassName("key")
        if (num.backgroundColor = "#00bfff") {
            $(num).css("background-color", "#f5f5f5");
        }
    });
    $("#sentence").text(sentences[0])
});