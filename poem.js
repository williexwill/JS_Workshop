//Part 1 - Define the extra information section for the poem
$("#info").html("<p>Extra info will go here.</p>");

// Part 2 - Display the first line of the poem and access info from the poem object if it exists
$.getJSON("poem.json", function(data){ // data variable is the JSON object
    let poemText; // Define a new variable to hold all text
    poemText = "<blockquote><p>"; 
    
    data.lines.map(function(line){ // We get a variable, line
      // Define a blank lineText.
        let lineText = "";
        line.map(function(word){
            let wordString;
            wordString = word.text;
            if (word.info){
              wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
            };

            // if (word.data){
            //         wordString = "<a href='#' data-info='" + word.info + "' data-link='" + word.link "'>" + wordString + "</a>";
            //         };
                        
            lineText = lineText + wordString + " ";
            });
            
        // line.map(function(word){
        //     let wordString;
        //     wordString = word.text;
        //     if (word.data){
        //         wordString = "<a href='#' data-info='" + word.info + "' data-link='" + word.link "'>" + wordString + "</a>";
        //         };
                            
        //         lineText = lineText + wordString + " ";
        //         });

        poemText = poemText + lineText + "<br/>";
        });

    poemText = poemText + "</p></blockquote>";

    $("#poem").html(poemText);
    
    $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo, clickedLink; 
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
    clickedLink = $( this ).data("link");
    infoText = clickedInfo + clickedLink;
    $("#info").html(infoText);
    });
});