let title = document.getElementById("titleStarWarsPlanets");
let table = document.getElementById("table");
let resultButton = document.getElementById("btn");
let nextButton = document.getElementById("nextbtn");
let previousButton = document.getElementById("prevbtn");
let pageNumber = 0;

resultButton.addEventListener("click", function(event){
    event.preventDefault();
    pageNumber = 1    
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
                nextButton.style.display = "inline-block";

        })
        .catch(function(error){
            console.log(`${error}, An error occured, please try again later!`)
        })
    })
    .catch(function(error){
        console.log(`${error}, An error occured, please try again later!`)
        
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

            previousButton.style.display = "inline-block";
            if(data.next === null){
                nextButton.style.display = "none"
            }


        })
        .catch(function(error){
            console.log(`${error}, An error occured, please try again later!`)
        })
    })
    .catch(function(error){
        console.log(`${error}, An error occured, please try again later!`)
        
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

            nextButton.style.display = "inline-block";
            if(pageNumber === 1){
                previousButton.style.display = "none"
            }

        })
        .catch(function(error){
            console.log(`${error}, An error occured, please try again later!`)
        })
    })
    .catch(function(error){
        console.log(`${error}, An error occured, please try again later!`)
        
    })
})


 
