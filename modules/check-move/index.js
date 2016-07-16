import currentRow from './current-row'
import currentVertical from './current-vertical'

export default function checkMove(data){
  if(currentRow(data)) console.log('current row')

  if(currentVertical(data)) console.log('vert row')
}
