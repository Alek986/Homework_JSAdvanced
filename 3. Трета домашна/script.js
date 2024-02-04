let title = document.getElementById("titleStarWarsPlanets");
let table = document.getElementById("table");
let resultButton = document.getElementById("btn");
let nextButton = document.getElementById("nextbtn");
let previousButton = document.getElementById("prevbtn");
let pageNumber = 0;

resultButton.addEventListener("click", function(event){
    event.preventDefault();
    pageNumber = 1//me interesira, ako vo generalniot scope vo promenlivata pageNumber stavam  pageNumber = 1, zosto koga kje ja trgnam ovaa linija od kod, i otkako kje stisnam next btn, na povtoren click od ovoj eventListener ne mi ja pokazuva prvata strana kako sto pravi i prvicno. Neli vo fetch vo takov slucaj e povikana prvata strana?    
    fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data)
                table.innerHTML = ""
                table.innerHTML = `<thead><th>Planet Name</th><th>Planet Population</th><th>Climate</th><th>Gravity</th></thead>`    
                for(let planet of data.results){
                console.log(planet)
                table.innerHTML += `<tr><td>${planet.name}</td><td>${planet.population}</td><td>${planet.climate}</td><td>${planet.gravity}</td></tr>`
                console.log(planet)
            }

        })
        .catch(function(data){
            console.log(data, "An error occured, please try again later!")
        })
    })
    .catch(function(response){
        console.log("An error occured, please try again later!")
        
    })
})

nextButton.addEventListener("click", function(event){
    event.preventDefault();
   
    pageNumber++
    fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data)
                table.innerHTML = ""
                table.innerHTML = `<tr><th>Planet Name</th><th>Planet Population</th><th>Climate</th><th>Gravity</th></tr>`
                for(let planet of data.results){
                console.log(planet)
                table.innerHTML += `<tr><td>${planet.name}</td><td>${planet.population}</td><td>${planet.climate}</td><td>${planet.gravity}</td></tr>`
                console.log(planet)
            }

        })
        .catch(function(data){
            console.log(data, "An error occured, please try again later!")
        })
    })
    .catch(function(error){
        console.log(error, "An error occured, please try again later!")
        
    })
})

previousButton.addEventListener("click", function(event){
    event.preventDefault();
    
    pageNumber--
    fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data)
            
            table.innerHTML = ""
            table.innerHTML = `<tr><th>Planet Name</th><th>Planet Population</th><th>Climate</th><th>Gravity</th></tr>`    
            for(let planet of data.results){
                console.log(planet)
                table.innerHTML += `<tr><td>${planet.name}</td><td>${planet.population}</td><td>${planet.climate}</td><td>${planet.gravity}</td></tr>`
                console.log(planet)
            }

        })
        .catch(function(data){
            console.log(data, "An error occured, please try again later!")
        })
    })
    .catch(function(error){
        console.log(error, "An error occured, please try again later!")
        
    })
})


// znam deka taskot sto e so gubenje na kopcinjata otkako kje se pritisne edno treba da go napravam so style.display = `block` i `none` i znam deka toa treba da go napravam vo posebna funkcija... da mi dadete nasoka mala. :) 
