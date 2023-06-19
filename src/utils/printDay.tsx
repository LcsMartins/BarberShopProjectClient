import shortMonths from "./months";

function printDay(dateReceived: string){
    console.log(dateReceived);
    const aux = dateReceived.split('-');
    let date =''
    if(aux[2][1]==='T' ){
        date = aux[2][0]  + ' de ' + shortMonths[Number(aux[1])] +' de ' + aux[0];
    }else{
        date = aux[2][0] + aux[2][1]  + ' de ' + shortMonths[Number(aux[1])] +' de ' + aux[0];
    }
    
    return date
  }

export default printDay;