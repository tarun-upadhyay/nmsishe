let arr = new Array(10,29,36,24,19);

// let res = arr.reduce(function(accumulator,el){
//     return  accumulator+el
// })
// console.log(res);//118

Array.prototype.myReduce = function(func,initial){
   let sum = initial || 0;
for(var i=0; i<this.length; i++){
    let elem = this[i];

    sum = func(sum,elem);
}

return sum;
}

let y = arr.myReduce(function(acc,el){
    return acc+el
})
console.log(y)