/*
    Script for loading in JSON file and converting to HTML and then past to webb page.
 */
var xhr = new XMLHttpRequest();

xhr.onload = function () {
    bookOfTheMonth = JSON.parse(xhr.responseText);

    var newContent = "";
        newContent += '<h1>' + bookOfTheMonth.bookOfTheMonth.bookName   + '</h1>';
        newContent += '<p>'  + bookOfTheMonth.bookOfTheMonth.bio        + '</p>';
        newContent += '<h2>' + bookOfTheMonth.bookOfTheMonth.header1    + '</h2>';
        newContent += '<p>'  + bookOfTheMonth.bookOfTheMonth.plot       + '</p>';
        newContent += '<h2>' + bookOfTheMonth.bookOfTheMonth.header2    + '</h2>';
        newContent += '<p>'  + bookOfTheMonth.bookOfTheMonth.plot2      + '</p>';
        newContent += '<p>'  + bookOfTheMonth.bookOfTheMonth.plot3      + '</p>';
        
    var bookCover = "";
        bookCover += '<img src="' + bookOfTheMonth.bookOfTheMonth.bookCover + '" class="standard_img">';

    document.getElementById('content').innerHTML = newContent;
    document.getElementById('cover').innerHTML = bookCover;
};
xhr.open('GET', 'JSON/data.json', true);
xhr.send(null);