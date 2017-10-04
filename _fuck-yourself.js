var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var upper,
    lower;

$(document).ready(function(){
    upper = $("#keyboard-upper-container");
    lower = $("#keyboard-lower-container");

    upper.hide();
    // function for showing correct keyboard
    $(document).on("keyup keydown", function(e){
        if(e.which === 16 && e.type === "keydown"){
            upper.show();
            lower.hide();
        } else if (e.which === 16 && e.type === "keydown") {
            upper.hide();
            lower.show();
        } // end of section
        // determines virtual keyboard hightlights
        var trueCode = e.which

        if (e.type === "keydown") {

            if (!e.shiftkey && e.which === !32) {
                trueCode = e.which + 32;
            }

            $("#" + trueCode).css("background-color", "teal");
        }

        if (e.type === "keyup") {
            $("#" + trueCode).css("background-color", "#f5f5f5");
        }
    });
});

