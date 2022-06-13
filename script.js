
//Global Variables 
var addButton = document.getElementById("enter"); //to add items to Shopping List
var input = document.getElementById("userInput"); //to get user input
var ul = document.querySelector("ul"); //to get the ul element to access li child element
var body = document.getElementById("special"); //get body element
var colorPalette1 = document.getElementById("bgcolor1"); //get color Palette 1
var colorPalette2 = document.getElementById("bgcolor2"); //get color Palette 2

//******************************ON LOAD */
function myFunction(){
//For exsiting shopping list items: Load and set class and id for delete buttons 
    var list = document.getElementsByTagName("li");
    var indexSum = list.length;
    var dlteButton;
    var currentItem;
    for(var index =0; index<indexSum; index++){
        dlteButton = document.createElement("button");//create the delete button
        dlteButton.innerHTML = "delete"; //style the delete button
        dlteButton.id = index;//console.log(dlteButton.id);
        dlteButton.classList.add("deleteButton");//set separate class for these buttons  //console.log(solidId);
        currentItem = list[index];//ge the current list item to which button to be appended
        currentItem.appendChild(dlteButton).addEventListener("click", finishMyTask2);
        //showing the current list item index matches the current button index
            //console.log(list[index]); 
            //console.log(dlteButton.id);
        
//Set default background color on load
        colorPalette1.value = "#55aaa0"; 
        colorPalette2.value=  "#d07c7c";
        body.style.background = "linear-gradient(to right, " 
        + colorPalette1.value
        + ", "
        + colorPalette2.value
        +")";
           
    }
}


//******************************ALERT */
//Function to generate alert to confirm user's decision to delete
function ConfirmDelete(){
    var text = "Are you sure your want to delete? \nClick OK to Delete or CANCEL to cancel changes."
    var text2;
    if (confirm(text) == true) { //if user clicks "OK"       
            return(true);        
      } else {       
            return(false); //user clicks "Cancel"
      }   
}

//******************************DELETE ITEMS */
//NOTE: Function to strike existing list items. 
//If the buttons were hard coded instead of being added on.load, this is the function you would use:
    // function finishMyTask(buttonIndex){
    //     // var tester = "the button index is " + buttonIndex; // var getItem = document.getElementsByTagName("li")[buttonIndex].innerText; // var fullPhrase = tester + " " + getItem; // console.log(fullPhrase);
    //     var  confirmation = ConfirmDelete();
    //     if(confirmation === true){
    //         var li = document.querySelectorAll("li")[buttonIndex];//console.log(li);
    //             li.classList.add("finishedTask");
    //                 alert("Good Job! You're Really Productive!"); //remove item from list               
    //     }else{
    //                  alert("Quit Playing Games!");  
    //     }    
    // }

//Function to remove new items fromShopping List item's id
function finishMyTask2(){
    console.log(this.parentNode.nodeName); //shows me the current parent node which is the list item (LI)  
        var  confirmation = ConfirmDelete();
            if(confirmation === true){
            //NOTE THERE ARE 2 WAYS TO HANDLE THIS:
                //1. Apply the strikethrough but keep the element on the page once user clicks delete:
                        this.parentNode.classList.toggle("finishedTask");    //applies strikethrough on parent node (nb if you just state this.class 
                                                                            // list it will apply the line-through on the button instead of the list item)
                                                                           //this.parentNode.remove(); //This can be used instead to simple remove the item from the list     
               alert("Amazing! Keep Up The Good Work!");
                //2. Or removing the element from the page once the user clicks delete:
                     this.parentNode.remove();
                //NB: It's not practical to do both 1 and 2 but leaving them both here as a reminder of the action options
            }else{
                alert("Quit Playing Games!");             
            }
                         
   } 


//******************************CHECK LENGTHS */
//Function to check length of user's input
function inputLength(){
	return input.value.length;
}


//Function to check length of input (Enter Key)
function addItemAfterClick(){
    if(inputLength()>0){
        createListItem();
    }
}

//Function to check length of input (Key Press)
function addItemAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListItem();		
    }
}

//******************************SET UP NEW ITEMS */
//Function to set my new Shopping List item's id
function setMyID(){
                //var txt = "entered setMyID function and found " + newIdNo + " li instances"; //console.log(txt);
                //var txt2  = "therefore next node will need to be " + (newIdNo); //console.log(txt2);
    var newIdNo = document.getElementsByTagName("li").length;               
    return(newIdNo);
}

//Function to create new Shopping List Item
function createListItem(){
	    var li = document.createElement("li");//creates new list item
	    var dlteButton = document.createElement("button");//create the delete button

            dlteButton.innerHTML = "delete"; //style the delete button
            dlteButton.id = setMyID();//console.log(dlteButton.id);
        var solidId = dlteButton.id; //store in new variable
            li.appendChild(document.createTextNode(input.value));//appends this an an item
            dlteButton.classList.add("deleteButton");//ser separate class for these buttons  //console.log(solidId);
        	ul.appendChild(li); //appends this li to the ul
            ul>li.appendChild(dlteButton).addEventListener("click", finishMyTask2);//appends the delete button with the addEventLister for Delete method
	        input.value = "";//edge-case prevention - user cannot simply add blank spaces to the list
}

//******************************CHECK AND UPDATE COLOR PALETTES */

//Function to capture and display selected color palettes
function checkMyColor(){
    //console.log(colorPalette1.value, " ", colorPalette2.value); //show me selected colors
    body.style.background = "linear-gradient(to right, " 
                            + colorPalette1.value //set to selected color
                            + ", "
                            + colorPalette2.value   //set to selected color
                            +")";
}


//******************************MANAGING THE EVENTS */
//Manage the events
addButton.addEventListener("click", addItemAfterClick);//runs this function if user clicks Enter
input.addEventListener("keypress", addItemAfterKeypress); //runs this function if user presses Enter key on keyboard
colorPalette1.addEventListener("input", checkMyColor);//runs this function if user clicks 1st color palette
colorPalette2.addEventListener("input", checkMyColor);//runs this function if user clicks 2nd color palette

