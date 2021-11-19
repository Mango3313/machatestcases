/* Operaciones con numeros pares */
const isPair = (a) => {
    if (a === 0) return 'No'
    else return a % 2 === 0 ? 'Si': 'No'
}
const isPairArray = (a) => {
    var allTrue = true
    a.forEach(element => {
            if(allTrue === false){
    
            }else{
                if(element % 2 !== 0) {
                    allTrue = false
                }
            }
        
    });
    return allTrue
}
const longString = (a)=>a.length
const dayOfWeek = (a)=>{
    switch(a){
        case 0: return 'Domingo'
        break;
        case 1: return 'Lunes'
        break;
        case 2: return 'Martes'
        break;
        case 3: return 'Miercoles'
        break;
        case 4: return 'Jueves'
        break;
        case 5: return 'Viernes'
        break;
        case 6: return'Sabado'
        break;
        default:
            return 'No existe'
    }
}
const actualHr = ()=>{
    var time = new Date().getHours();
    return time
}
const sortArray = (a)=>{
   return a.sort((a, b) => a - b)
}
const toUpperCase = (word)=>{
    return word.toUpperCase()
}

module.exports = {
    isPair,
    isPairArray,
    longString,
    dayOfWeek,
    actualHr,
    sortArray,
    toUpperCase
  }