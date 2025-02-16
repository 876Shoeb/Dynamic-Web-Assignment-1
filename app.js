
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
      
      document.getElementById('changeImageButton').addEventListener('click', function() {
        document.getElementById('image').src = 'mountain.jpg';
      });
      

  
  


  