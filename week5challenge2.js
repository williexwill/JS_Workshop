// Let's say you are writing a program that allows users to manage a 
// collection of recipes. You want the user to be able to add, remove, 
// edit, and search through their recipes. You also want the user to be 
// able to "favorite" individual recipes and let them search and look through their 
// list of favorites. Write some pseudo-code for a program that allows for each of 
// these features.

create variable to store recipes array
    
create an alert with a prompt 

create a variable to store a response

create a while statement to run the program
    if response is add
        create a variable to store a response
        prompt
        push response to recipes array

    else if remove 
        create a variable to store a response
        prompt
        for loop on recipes if response == i, splice 
    
    else if edit
        create a variable to store response1 (recipe)
        create a variable to store response2 (new recipe)
        prompt
        for loop on recipes if response1 == i, findIndex
            function replacing response1 with response2 
        //How are these recipes stored? Assuming the title is within an array 
        //of arrays. How do I edit an array stored within an array?

    else if search 
        create a variable to store a response
        prompt
        for loop on recipes if response == i, display(alert?) i  
            else create variable to store newResponse
            alert title missing 
            prompt add new tile, y/n?
            if response y, run "add"
            else break
    
    else if favorite
        create a variable to store a favorites array
        create a variable to store a response 
        prompt
        push response to favorites array
        
    else if search favorites
        create a variable to store a response
        prompt
        for loop on favorites if response == i, display(alert?) i  
            else create variable to store newResponse
            alert title missing 
            prompt add new tile, y/n?
            if response y, run "favorite"
            else break
