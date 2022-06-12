 let name = {
     firstName: "Ashish",
     lastName:"Sinha"
 }

 let printName = function(hometown, state,country, world){
     console.log(this.firstName +" "+ this.lastName + "," + hometown + "," + state + "," + country + "," + world)
 }

 let printMyName = printName.bind(name, "Samastipur", "Bihar");
 printMyName("India", "Asia")

 Function.prototype.mybind = function(...args){
        let obj = this,
        params = args.slice(1)
        return function(...args2){
            obj.apply(args[0], [...params, ...args2])
        }
 }

 let printMyName2 = printName.mybind(name, "Samastipur", "Bihar")
 printMyName2("India","Asia")