var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var upper,
    lower,
    sentenceCounter = 0,
    characterCounter = 0,
    currentSentence,
    remove,
    ok;

$(document).ready(function(){
    upper = $("#keyboard-upper-container");
    lower = $("#keyboard-lower-container");
    remove = $("#remove")
    ok = $("#ok")

    upper.hide();
    
    $(document).on("keyup keydown", function(e){
        if(e.which === 16 && e.type === "keydown"){
            upper.show();
            lower.hide();
        } else if (e.which === 16 && e.type === "keyup") {
            upper.hide();
            lower.show();
        } 

        if (e.type === "keydown" && trueCode !== 16) {
            if (trueCode === currentSentence.charCodeAt(characterCounter)) {
    
            }       
        }

        var trueCode = e.which;


        if (!e.shiftKey && e.which !== 32) {
            trueCode = e.which + 32;
        }

        if (e.type === "keydown") {
        $("#" + trueCode).css("background-color", "teal");
        }

        if (e.type === "keyup") {
            $("#" + trueCode).css("background-color", "#f5f5f5");
        }
        
        if (trueCode === currentSentence.charCodeAt(characterCounter) && e.type === "keydown"){
            
        }
    });

    getSentence();
    hightlightCharacter();
    targetCharacter();
});

function getSentence() {
    currentSentence = sentences[sentenceCounter];

    var splitSentence = currentSentence.split("");
    splitSentence.forEach(function(character, index) {
        $("#sentence").append(`<span id="letter-${index}">${character}</span>`)
    });
}

function hightlightCharacter() {
    if (characterCounter !== 0) {
        $("#letter-" + (characterCounter - 1)).css("background-color", "yellow");
    }
    $("#letter-" + characterCounter).css("background-color", "yellow");
}

function targetCharacter() {
    $("target-letter").append(currentSentence.charAt(characterCounter));
}

// var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
// var sent = 0,
//     char = 0,
//     sentCont,
//     targCont;

// $(document).ready(function() {
//     // Shift key effects keyboard
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
//     // Virtual Keyboard Highlights
//     $(document).keypress(function(e) {
//         $("#" + e.which).css("background-color", "#00bfff");
//     });
//     $(document).keyup(function(e) {
//         var num = (document).getElementsByClassName("key")
//         if (num.backgroundColor = "#00bfff") {
//             $(num).css("background-color", "#f5f5f5");
//         }
//     }); // End of section

//     // var currentSentence = sentences[sentCont],
//     //     splitSentence = currentSentence.split("")

//     // splitSentence.forEach((s, i) => {
//     //     $("<span id='letter-" + i + "></span>")
//     // });

//     // $("#sentence").text(sentences[sent]);
//     // $(document).keypress(function(e) {

//     // });
//     // $("#sentence").text(sentences[0])
//     // $("#target-letter").text(sentences[sent].charAt(0));
//     // var n = sentences[sent].charAt(numb++);
//     // $("#feedback").append("<span class='glyphicon'></span>")
//     // $(document).keypress(function(e) {
//     //     $("#sentence").text(sentences[sent])
//     //     var a = String.fromCharCode(e.which);
//     //     if (a === n) {
//     //         n = sentences[sent].charAt(numb++);
//     //         var n1 = sentences[sent].charAt(numb1++);
//     //         $("#target-letter").text(n1);
//     //         $(".glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok")
//     //         var sentlen = sentences[sent].length;
//     //     } else {
//     //         $(".glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-remove")
//     //     }
//     //     if (numb === sentences[sent].length){
//     //         sent = 1;
//     //         numb = 0
//     //         numb1 = 1;
//     //         console.log("sdf");
//     //     }
//     // });
// });
