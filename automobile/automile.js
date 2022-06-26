//creating with Object.create
let r_d = {
    Name: "Tata",
    logo:  "~~t~~A~~",
    Mfg_year:2006,
    color:"crystal white",
}

let tiago = Object.create(r_d);
tiago.model = "Tiago"

let safari = Object.create(r_d);
safari.model = "safari"
console.log(tiago,safari);


///using constructor
function workshop (n,l,m,c){
    this.Name =n;
    this.log = l;
    this.Mfg_year=m;
    this.color=c;
}
workshop.prototype.model = function(mod){
    this.model=mod;
}
let assigne = new workshop("Tata","~~t~~A~~",2006,"crystal white");
assigne.model("Nano")
console.log(assigne);

