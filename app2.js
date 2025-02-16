
// Question 9

function getStyle() {
    
    let quest9Div = document.getElementById("quest9Div");
    
    let displayDocStyle = quest9Div.querySelector("#demo");
    
    let docStyle = window.getComputedStyle(document.body);
    
    let styleList = { "Background" : docStyle.backgroundColor,
        "AccentColor" : docStyle.accentColor, "Padding" : docStyle.padding};
    
    Object.entries(styleList).forEach(([key, value]) => 
        displayDocStyle.innerHTML += `<ul><li>${key} : ${value}</ul></li>`)
    }
      





// Question 10

const ptag = document.getElementById("ptag");

ptag.addEventListener("mouseover", mouseOver);
ptag.addEventListener("mouseout", mouseOut);

function mouseOver() {
  ptag.style.color = "red";
}

function mouseOut() {
  ptag.style.color = "black";
}


  //Question 11

  document.getElementById("changeFont").addEventListener("mouseover", function() {
    this.style.color = "red";
    this.style.fontWeight = "bold";
  });
  
  document.getElementById("changeFont").addEventListener("mouseout", function() {
    this.style.color = "black";
    this.style.fontWeight = "normal";
  });
  
//Question 12

document.getElementById("removeButton").addEventListener("click", function() {
    var paragraph = document.getElementById("paragraphDelete");
    if (paragraph) {
      paragraph.remove();
    }
  });
  
//Question 13

const myArray = ['mango', 'soursop', 'jackfruit', 'coconut','pineapple','jimbilin','breadfruit','guava'];

const lastItem = myArray[myArray.length - 1];

document.getElementById('itemDel').textContent = lastItem;










  
    

  