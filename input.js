let inputDirection = { x: 0, y: 0 }
let lastInputDirection= { x:0 , y:0}

//For screens with width >400 px
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            //disable the user from pressing key up directly after key down 
            if(lastInputDirection.y !==0) break
            inputDirection = { x: 0, y: -1 }
            break

        case 'ArrowDown':
            //disable the user from pressing key down directly after key up
            if(lastInputDirection.y !==0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            //disable the user from pressing key left directly after key right
            if(lastInputDirection.x !==0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            //disable the user from pressing key right directly after key left
            if(lastInputDirection.x !==0) break
            inputDirection = { x: 1, y: 0 }
            break
    }


})

export function getInputDirection() {
    lastInputDirection=inputDirection;
    return inputDirection;

}

//for small screens ( width < 40 px)
function myFunction(x) {
    var arrowsdiv=document.getElementById("otherbuttons");
    var upbutton=document.getElementById("upbutton");
    
        
    const buttons = document.getElementsByTagName("button");

    const buttonPressed = e => {
      console.log(e.target.id);
     
           
        switch (e.target.id) {
            case 'up':
                //disable the user from pressing key up directly after key down 
                if(lastInputDirection.y !==0) break
                inputDirection = { x: 0, y: -1 }
                break
    
            case 'down':
                //disable the user from pressing key down directly after key up
                if(lastInputDirection.y !==0) break
                inputDirection = { x: 0, y: 1 }
                break
            case 'left':
                //disable the user from pressing key left directly after key right
                if(lastInputDirection.x !==0) break
                inputDirection = { x: -1, y: 0 }
                break
            case 'right':
                //disable the user from pressing key right directly after key left
                if(lastInputDirection.x !==0) break
                inputDirection = { x: 1, y: 0 }
                break
        }
        
     
    }
    
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }

        }
   
    
  
  
  var x = window.matchMedia("(min-width:400px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes