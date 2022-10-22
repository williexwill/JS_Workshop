//alert('My project is going to be awesome!');

$("#noShow").hide();

//$("h1").html("Metaverse as Cyberspatial Fix")

$("#joke").append("<p>Your VR looks worse than a SEGA DreamCast, I'm not going in there.</p>");

$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});

$("#toggleJokes").click(function() {
    $("#joke").toggle();
})

$("#newLook").click(function() {
    $("body").css({
         "background-color" : "black"
     });
    $("#joke").css({
        "border" : "5px solid white",
        "background-color" : "black",
        "color" : "white",
        "font-size" : "12px",
    });
    $("#poem").css({
        "border" : "5px solid white",
        "background-color" : "black",
        "color" : "white",
        "font-size" : "12px",
    });
    $("button").css({
        "background-color": "black",
        "color": "white",
        "font-size": "10px",
        "border": "2px solid white",
    })
    $(".formatText").css({
       "font-family" : "'Georgia'", 
      })
    $("p").css({
        "font-size" : "12px",
    })
    $("h2").css({
        "font-size" : "16px",
    })
    $("h1").css({
        "font-size" : "20px",
    })
})

$("#newLook").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
})

$("#feedBack").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
})

$("#feedBack").click(function() {
   let response = prompt("serious or silly?");
    if (response == "serious"){
        $("h1").html("Metaverse as Cyberspatial Fix");
    }
    else if (response == "silly"){
        $("h1").html("Metaverse? More like Meta-worst!");
    }
    // else {
    //     prompt("serious or silly?");
    // } 
})