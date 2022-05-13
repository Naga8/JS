let person = {
    name :"Naga",
    hello : function(thing) {
        console.log(this.name + " says Hello "  +  thing)
    },
}

let alterPerson = {
    name : "Nagarathinam",
}

// person.hello.call(alterPerson, "world"); //call
// person.hello.apply(alterPerson, ["world"]); //apply
const newPerson = person.hello.bind(alterPerson) //bind
newPerson("World");