let contactList = [];


let names = ["Ben", "Sam", "Ken", "Brayan", "Lesa"]
let age = [21, 32, 46, 12, 30]
let occupation = ["doctor", "engineer", "teacher", "bass player", "people watcher"]

function genNum(){
    return Math.floor(Math.random() * 5);
}
function Contact(){
    
    this.name = names[genNum()];
    this.age = age[genNum()];
    this.occupation = occupation[genNum()];


}

function getData(){
    //write a for loop to go through
    for(let i = 0; i < 10; i++){
        let newContact = new Contact();
        contactList.push(newContact);
    }
}

getData();

function genDOMContact(contact){
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    h3.innerHTML = "Name: " + contact.name;
    h4.innerHTML = "Age: " + contact.age;
    h5.innerHTML = "Occupation: " + contact.occupation;
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    return div;
}

let DOMdata = contactList.map(genDOMContact);



function appendChildren(childDiv){
    let contacts = document.getElementById("contacts")
    contacts.appendChild(childDiv);
}

DOMdata.forEach(appendChildren);