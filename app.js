
// Question 1
function ShowResult() {
    let x= document.getElementById("x").value;
    let y= document.getElementById("y").value;
    let sum = parseInt(x) + parseInt(y);
    let result = document.getElementById("Demo");
    
    result.innerHTML = `${sum}`;
    };
    
  
    
//   Question 2
 function Rally(){
  
                 let firstName, lastName, age;
  
                  firstName = prompt("Please enter your first name: ");
                  lastName = prompt("Please enter your last name: ");
                  age = prompt("Please enter your age: ");
                 console.log("Please enter your name:") 
                 
                 alert(`Your name is ${firstName} " " ${lastName}" " Your age is ${age}`);         
                 
    }

//    Question 3 
  
  function colorChange() {
      const elementTextarea =document.getElementsByTagName("textarea") 
      const elementParagraph =document.getElementsByTagName("p") 
     
   const elementColor =["#fff000","#ff00ff", "#e1a2ff"]
  
     for (var i =0 ; i<elementTextarea.length; i++){
         elementTextarea[i].style.borderColor="#FF0000"
     }
  
  for (var i =0 ; i<elementParagraph.length; i++){
     elementParagraph[i].style.borderColor="#FF0000"
  }
  }
  
//  Question 4 
  const paratext= `A dynamic website generates content in real time \n and responds to users' actions and preferences. \n Dynamic websites can customize content, retrieve data from \n
  databases, and offer interactive features.`;
  
   console.log(paratext);
   document.getElementById("paratext").innerHTML= paratext ;
  document.getElementById("paratext").style.backgroundColor= "#FF0000";
  
  
//Question 5
  
  function changeFontStyle() {
  
  document.getElementById("targetparagraph2").style.color = "Yellow";
document.getElementById("targetparagraph2").style.fontFamily = "cursive";
document.getElementById("targetparagraph2").style.fontSize = "x-large";
  document.getElementById("effect").addEventListener("click", changeEffect);
  
  }
  
  
      
   
 // Question 6    
     
  function changeColors() {
  
  let tutorialList = document.getElementsByClassName("tutorial");
  for(let i = 0; i < tutorialList.length; i++){
  tutorialList[i].style.backgroundColor = "Yellow";
  }
  document.getElementById("btn1").addEventListener("click", changeColors) ;
 
  };
  
  
//   Question 7
  
  
function displayMessage() {
    const selectedOption = document.getElementById("dropdown").value;
    const messageP = document.getElementById("message");

    // Change the message based on the selection
    switch(selectedOption){
        case "Option1" :

        messageP.innerText = "You selected Option 1!";
        break;
    
    case "Option2": 
            messageP.innerText = "You selected Option 2!";
            break;
        case "Option3":
             messageP.innerText = "You selected Option 3!";
             break;

    default :
            messageP.innerText = "No value has been selected!";
            break;

    }


}  
  
    // Question 8
    
      //function changeImage() {
      //   document.getElementById("image").src = "Pitbull.jpg"
      //   document.getElementById("image2").src ="Pitbull-a.jpg"  } 
  
      
      window.onload = function() {
          document.getElementById("image").src = "image/Pitbull-a";
      };

  
  
// Question 9
    
let quest9Div = document.getElementById("quest9Div");

let displayDocStyle = quest9Div.querySelector("#demo");

let docStyle = window.getComputedStyle(document.body);

let styleList = { "Background" : docStyle.backgroundColor,
    "AccentColor" : docStyle.accentColor, "Padding" : docStyle.padding};

Object.entries(styleList).forEach(([key, value]) => {
    displayDocStyle.innerHTML += `<ul><li>${key} : ${value}</ul></li>`;
});
  

  // Question 10


let p = document.getElementsById("p");
  document.getElementById("p").addEventListener("mouseover", mouseOver);
document.getElementById("p").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("p").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("p").style.color = "black";
  }
  

  //Question 11
  
      // Define your array
      const myArray = ['mango', 'soursop', 'jackfruit', 'coconut','pineapple','jimbilin','breadfruit','guava'];
  
      // Get the Last item of the array
      const lastItem = myArray[myArray.length - 1];
  
      // Display the last item inside the paragraph
      document.getElementById('demo').textContent = lastItem;
  
      function extractAndDisplayStyleContent() {
        // Find the first <style> element in the document
        const styleElement = document.querySelector('style');
    
        if (styleElement) {
            // Get the text content of the <style> element
            const styleContent = styleElement.textContent;
    
            // Find the <p> element with ID "demo"
            const demoParagraph = document.getElementById('demo');
    
            if (demoParagraph) {
                // Display the extracted CSS inside the <p> element
                demoParagraph.textContent = styleContent;
            } else {
                console.warn('No element with ID "demo" found.');
            }
        } else {
            console.warn('No <style> element found in the document.');
        }
    }
    
    // Call the function to execute the logic
    extractAndDisplayStyleContent();
    

  