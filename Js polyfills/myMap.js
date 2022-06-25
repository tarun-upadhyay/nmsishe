// let arr = new Array(10,29,36,24,1);
//real method of creating a array
// let x=arr.map(function(a,z,s){
//     return  a+5;
// });
// console.log(x)

let arr = new Array(10,29,36,24,1);
let newarr=[];
Array.prototype.myMap = function(func){

    let declarearr= this

    for(let i=0; i<declarearr.length; i++){

        let elem = declarearr[i];
         
        let a = func(elem)
        newarr.push(a)
    }
 return newarr;
}

let y = arr.myMap(function(elem){
    return elem+5;
});
console.log(y);