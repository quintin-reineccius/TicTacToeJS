import { buttons } from './config';

export default function clearBoard(currentValue){
  buttons.forEach(button => {
    button.disabled = false
    button.innerHTML = ' '
  })

  winner.innerHTML = ' ';
}
