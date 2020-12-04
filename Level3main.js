var myTodolist = document.getElementsByTagName("Level3index");
var i;
for (i = 0; i < myNodelist; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Adds a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Creates a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("What should I do?");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

                 items = document.querySelectorAll("#list li"),
                 tab = [], index;
         
             // get the selected li index using array
             // populate array with li values
             
             for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
             }
             
             // get li index onclick
             for(var i = 0; i < items.length; i++){
                 
                 items[i].onclick = function(){
                     index = tab.indexOf(this.innerHTML);
                     console.log(this.innerHTML + " INDEX = " + index);
                     // set the selected li value into input text
                     inputText.value = this.innerHTML;
                 };
                 
             }
            
            function refreshArray()
            {
                // clear array
                tab.length = 0;
                items = document.querySelectorAll("#list li");
                // fill array
                for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
               }
            }
            function addLI(){
                
                var listNode = document.getElementById("list"),
                    textNode = document.createTextNode(inputText.value),
                    liNode = document.createElement("LI");
                    
                    liNode.appendChild(textNode);
                    listNode.appendChild(liNode);
                    
                    refreshArray();
                    
                    // add event to the new LI
                    
                    liNode.onclick = function(){
                     index = tab.indexOf(liNode.innerHTML);
                     console.log(liNode.innerHTML + " INDEX = " + index);
                     // set the selected li value into input text
                     inputText.value = liNode.innerHTML;
                 };
                    
             }
             
             function editLI(){
                 // edit the selected li using input text
                 items[index].innerHTML = inputText.value;
                 refreshArray();
              }
              
              function deleteLI(){
                  
                      refreshArray();
                      if(items.length > 0){
                          items[index].parentNode.removeChild(items[index]);
                          inputText.value = "";
                      }
              }

              function clearLI(){
                  
                      refreshArray();
                      if(items.length > 0){
			for (i = 0; i < items.length; i++) {
                          //items[index].parentNode.removeChild(items[index]);
				items[i].parentNode.removeChild(items[i]);
                          inputText.value = "";
				}
                      }
              }


function sortLI() {

  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");

  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");

    // Loop through all listed-items
    for (i = 0; i < (b.length - 1); i++) {
      // says there should be no swaping
      shouldSwitch = false;
      /* checks if the next item should swap place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a swap
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //alert("Enter Task");
      /* If a swap has been marked, make the swap
      and mark the swap as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

