var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$(document).ready(function() {
    $("#keyboard-upper-container").hide();
    $(document).keydown("16", function (){
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    })
    $(document).keyup("16", function (){
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    })
});