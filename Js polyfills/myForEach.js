let arr = new Array(10,29,36,24,1);
//real method of creating a array

// arr.forEach(function(a,i){
//     console.log(a*4)
// });

Array.prototype.myForEach= function(func){

    for(let i=0; i<this.length; i++){
        let elem = this[i];
         func(elem);
    }
};

arr.myForEach(function(s){
    console.log(s*5)
})