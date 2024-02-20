let carInput = document.getElementById("typeId");
let brandInput = document.getElementById("brandId");
let modelInput = document.getElementById("modelId");
let doorsInput = document.getElementById("doorsId");
let gasTypeInput = document.getElementById("gasTypeId");
let colorInput = document.getElementById("colorId");
let newOrOldInput = document.getElementById("newOrOldId");
let horsepowerInput = document.getElementById("horsepowerId");
let table = document.getElementById("table");
let noDataFound = document.getElementById("noDataFound");
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");


async function fetchData() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/Alek986/JSON-Cars/main/cars.json");
        let data = await response.json();
        displayData(data);
        searchBtn.addEventListener("click", () => searchData(data));
        resetBtn.addEventListener("click", () => clearData());
        return data;
    } catch (error) {
        console.log("Error occurred while fetching data", error);
    }
}

    function searchData(data) {

    if(carInput.value !== "") {
        data = data.filter(car => car.type.toLowerCase() === carInput.value.toLowerCase());
    }
    if(brandInput.value !== "") {
        data = data.filter(car => car.brand.toLowerCase() === brandInput.value.toLowerCase());
    }
    if(modelInput.value !== "") {
        data = data.filter(car => car.model.toLowerCase() === modelInput.value.toLowerCase());
    }
    if(doorsInput.value !== "") {
        data = data.filter(car => car.doors.toString() === doorsInput.value.toLowerCase());
    }
    if(gasTypeInput.value !== "") {
        data = data.filter(car => car.gasType.toLowerCase() === gasTypeInput.value.toLowerCase());
    }
    if(colorInput.value !== "") {
        data = data.filter(car => car.color.toLowerCase() === colorInput.value.toLowerCase());
    }
    if(newOrOldInput.checked){
        data = data.filter(car => car.isNew === true)
    }
    if(horsepowerInput.value !== "") {
        data = data.filter(car => car.horsepower.toString() === horsepowerInput.value.toLowerCase());
    }
    
    displayData(data)
}

function displayData(data) {
    
    table.innerHTML =  "<thead><tr><th>Type</th><th>Brand</th><th>Model</th><th>Doors</th><th>Gas Type</th><th>Color</th><th>Horsepower</th></tr></thead>"

    if(data.length === 0) {
        noDataFound.style.display = "block";
    } else {
            noDataFound.style.display = "none";
            data.forEach(car => {
                let row = table.insertRow();
                row.innerHTML = `
            <td>${car.type}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.doors}</td>
            <td>${car.gasType}</td>
            <td>${car.color}</td>
            <td>${car.horsepower}</td>`
        })
    
    }
}

function clearData() {
    carInput.value = "";
    brandInput.value = "";
    modelInput.value = "";
    doorsInput.value = "";
    gasTypeInput.value = "";
    colorInput.value = "";
    newOrOldInput.value = false;
    horsepowerInput.value = "";
    table.innerHTML =  "<thead><tr><th>Type</th><th>Brand</th><th>Model</th><th>Doors</th><th>Gas Type</th><th>Color</th><th>Horsepower</th></tr></thead>";
}


fetchData();




//https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
//raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json