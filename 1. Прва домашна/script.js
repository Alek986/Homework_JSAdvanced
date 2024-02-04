function Reminder(title, priority, color, description){
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description
}

let btnAddReminder = document.getElementById("addReminder");
let btnshowReminder = document.getElementById("showReminder");

let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("description");


let arrayOfReminders = []

btnAddReminder.addEventListener("click", function(){
    let title = titleInput.value
    if(!title){
        console.log("Please enter title")
        return
    }
    let priority = priorityInput.value
    if(!priority){
        console.log("Please select Priority")
        return
    }
    let color = colorInput.value
    if(!color){
        console.log("Please select color")
        return
    }
    let description = descriptionInput.value
    if(!description){
        console.log("Please enter a description")
        return
    }

let reminderList = new Reminder(title, priority, color, description)
console.log(reminderList)
arrayOfReminders.push(reminderList)
})

// zaglaviv kaj dodavanjeto na tabelite..

btnshowReminder.addEventListener("click", function(){
 let table = document.getElementById("table")
 let title = titleInput.value
    if(!title){
        console.log("Please enter title")
        return
    }
    let priority = priorityInput.value
    if(!priority){
        console.log("Please select Priority")
        return
    }
    let color = colorInput.value
    if(!color){
        console.log("Please select color")
        return
    }
    let description = descriptionInput.value
    if(!description){
        console.log("Please enter a description")
        return
    } 
let reminderList = new Reminder(title, priority, color, description)
    
    table.innerHTML += `
    <thead>
        <th>${title}</th>
        <th>${priority}</th>
        <th>${color}</th>
        <th>${description}</th>
    </thead>
`
 
})

// znam deka kodot sto se povtoruva najubavo kej bide da go stavam vo nadvoresna funkcija i vo eventlistener-ite da ja koristam. megjutoa probuvav na povekje nacini, i iskreno malku se pomaciv no mislam deka na krajot uspeav.