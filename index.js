// Code your solutions in this file


/*const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for ( let i =0 ; i<gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bow`)
   
}
return gifts;
    }

    wrapGifts(gifts);*/

      function writeCards(arr,ev){
           let newArr=[]
        for ( let i =0 ; i<arr.length; i++){
                
                newArr[i]= `Thank you, ${arr[i]}, for the wonderful ${ev} gift!`
            debugger}
            return newArr;
            }

function countDown(number){
    let i=0;
while(number>=0){
    console.log(number)
    number--;
    
}
}