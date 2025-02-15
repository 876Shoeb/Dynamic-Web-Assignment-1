
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
  

//   Question 5 
  
  function changeFontStyle() {

 const elementTargetparahraph = document.getElementById("targetparagraph");
  document.getElementById("targetparagraph2").style.color = "Green"; 
  document.getElementById("targetparagraph2").style.fontFamily = "Calibre";
  document.getElementById("targetparagraph2").style.fontSize = "Larger";

  document.getElementById("btn1").addEventListener("click", changeFontStyle);
  }
  
  
    //   Question 6 
     
  function changeColors() {
  
  let tutorialList = document.getElementsByClassName("tutorial");
  for(let i = 0; i < tutorialList.length; i++){
  tutorialList[i].style.backgroundColor = "Yellow";
  }
  document.getElementById("effect").addEventListener("click", changeEffect);
  };
  
  
//   Question 7
  
  
      function displayMessage() {
          const selectedOption = document.getElementById("dropdown").value;
          const messageDiv = document.getElementById("message");
  
          // Change the message based on the selection
          if (selectedOption === "option1") {
              messageDiv.innerText = "You selected Option 1!";
          } else if (selectedOption === "option2") {
              messageDiv.innerText = "You selected Option 2!";
          } else {
                   messageDiv.innerText = "You select option 3!";
              
          } 
      }    
  
  
    // Question 8
    
      //function changeImage() {
      //   document.getElementById("image").src = "Pitbull.jpg"
      //   document.getElementById("image2").src ="Pitbull-a.jpg"  } 
  
      
      window.onload = function() {
          document.getElementById("image").src = "Pitbull-a";
      };
        
  let paragraphs = document.getElementsByTagName("p");
          for (let p of paragraphs) {
              p.onmouseover = function() {
                  this.style.color = "#FF0000";
              };
              p.onmouseout = function() {
                  this.style.color = "#070302";
              };
          }
  
  
  
// Question 9
    
      
    // Select the button and the paragraph
    const removeButton = document.getElementById("myfunction");
    const paragraph = document.getElementById("demo");
  
    // Add an event listener to the button
    removeButton.addEventListener("click" , () => {
      paragraph.remove(); // This removes the paragraph
  
    });
  

  
  
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
    