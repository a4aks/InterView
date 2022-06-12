
let myname = {
    firstName: "Ashish",
    lastName: "Sinha"
}

let printfullName = function(home,state){
    console.log(this.firstName + " " + this.lastName +","+ home + ","+ state )
}

let myname2 = {
    firstName: "Kriti",
    lastName: "Sinha"
}

// function borrowing
// printfullName.call(myname,"Samastipur","Bihar")
// printfullName.call(myname2, "Hajipur","Bihar")

// printfullName.apply(myname,["Samastipur","Bihar"])
// printfullName.apply(myname2, ["Hajipur","Bihar"])


let printMyName = printfullName.bind(myname, "Hajipur","Bihar")
console.log(printMyName)

printMyName()