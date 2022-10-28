$("#info").html("<p>Extra info will go here.</p>");

$.getJSON("poem.json", function(data){ 
    let poemText; 
    poemText = "<blockquote><p>"; 
    
    data.lines.map(function(line){ 
        let lineText = "";
        line.map(function(word){
            console.log(word.text);
            let wordString;
            if (word.text) {
                wordString = word.text;
              };
            
            if (word.info){
              wordString = "<a href='#' data-info='" + word.info + "'>" + word.text + "</a>";
            };

            if (word.link){
                    // wordString = "<a href='#' data-info='" + word.info + "' data-link='" + word.link + "' >" + word.text + "</a>";
                    // };
                    wordString = "<a href='#' data-info='" + word.info + "' data-link= '<a href= " + word.link + ">" + word.link + "</a>'>" + word.text + "</a>";
                };
                        
            lineText = lineText + wordString + " ";
            });

        poemText = poemText + lineText + "<br/>";
        });

    poemText = poemText + "</p></blockquote>";

    $("#poem").html(poemText);
    
    $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo, clickedLink; 
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
    clickedLink = $( this ).data("link") || "";
    console.log(clickedLink);
    console.log(clickedInfo);
    infoText = clickedInfo + "<br/>" + clickedLink;
    $("#info").html(infoText);
    });
});