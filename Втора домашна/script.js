let btn = document.getElementById("btn")
let divElement = document.getElementById("divElement")

btn.addEventListener("click", function(event){
    event.preventDefault()

    fetch("http://api.open-notify.org/astros.json")

    .then(function(response){

        response.json()

        .then(function(data){
            console.log(data)
            
            // divElement = ""            
            for(let astronaut of data.people){
                divElement.innerHTML += `<ul>
                <li>${data.people[astronaut]}</li>
                </ul>`
            }

        })

        .catch(error)
        console.log("An error occured!")

    })

    .catch(function(response){
        console.log("An error occured, please try again later")
        console.log(response)
    })

})