/**
 * Created by Luka on 8. 07. 2017.
 */

 $(document).ready(function() {

    $("#create").on("click", function() {
          var json = $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");

        console.log(json);

        var quoteText = "";
        var quoteAuthor = "";

        quoteText += json.quoteText;
        quoteAuthor += json.quoteAuthor;


        $(".quote-text").html(quoteText);
     $(".quote-author").html(quoteAuthor);
  
    });
  });
