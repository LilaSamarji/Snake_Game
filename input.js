let inputDirection = { x: 0, y: 0 }
let lastInputDirection= { x:0 , y:0}
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