/**
 * Created by Luka on 8. 07. 2017.
 */

 $(document).ready(function() {

    $("#create").on("click", function() {
          $.get("http://cors-everywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(odgovor) {
	    var text = odgovor.quoteText;
	    var author = odgovor.quoteAuthor;

	    $("#quote-text").html(text);
        $("#quote-author").html(author);

        $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + text + ' — ' + author);
        $('#facebook').attr('href', 'http://www.facebook.com/share.php?u=' + text + ' — ' + author);

        });
    });
 });
