let arr = new Array(10,29,36,24,1);

// let res = arr.filter(function(el){
//     return el%2==0;
// });
// console.log(res)
let newarr= [];
Array.prototype.myFilter= function(func){

    for(let i=0; i<this.length; i++){
        let elem = this[i];
        
        let a = func(elem);

         if(a==true){
             newarr.push(elem)
         }
    }
    return newarr;
}

let y = arr.myFilter(function(el){
    return el%2!=0
});
console.log(y);