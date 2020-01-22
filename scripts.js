$(document).ready(function(){

  $("#submit").click(function(event){
    event.preventDefault();

    var sentence = $("#sentence").val();
    var words = sentence.split(" ");
    console.log(words)
    var newSentence = [];

    for(var i = 0; i < words.length; i++) {
      if (words[i].length >= 3) {
        newSentence.push(words[i]);
      }
    }

    $("#output").text(newSentence.reverse().join(" "));

    console.log(typeof $("#output").val());

  });

});