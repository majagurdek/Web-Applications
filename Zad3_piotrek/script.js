function clickSection(f){
    fetch("./city.json")
        .then((res) => res.json())
        .then((res) =>  {
        cities = res.cities;
        f();
    })
}

function coll(element, f) {
    element.classList.toggle("active");
    var content = element.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
      f();
    }  
}

var malopol = document.getElementById("malopol");
malopol.addEventListener("click", function(){
    coll(this, function(){clickSection(show_m)});
})

function show_m(){  
    const currentDiv = document.getElementById("m-content");
    currentDiv.innerHTML = "";
    let malopol = cities.filter((city) => city.province=="małopolskie");
    for (const city of malopol){
        addCity(city, currentDiv);
    }   
}

var a = document.getElementById("a");
a.addEventListener("click", function(){
    coll(this, function(){clickSection(show_a)});
})

function show_a(){  
    const currentDiv = document.getElementById("t-content");
    currentDiv.innerHTML = "";
    let a = cities.filter((city) => ((city.name.match(/a/g) || [])).length == 2);
    for (const city of a){
        addCity(city, currentDiv);
    }
}

var density = document.getElementById("density");

density.addEventListener("click", function(){
    coll(this, function(){clickSection(show5thCity)});
})

function get5ThCity()
{
    var sortedEntries = Object.entries(cities).sort(function(a,b){return b[1].density-a[1].density});
    var result = sortedEntries[4][1];
    return result;
}

function show5thCity(){
    const currentDiv = document.getElementById("density-content");
    currentDiv.innerHTML = "";
    addCity(get5ThCity(), currentDiv);
}

var people100k = document.getElementById("100k");

people100k.addEventListener("click", function(){
    coll(this, function(){clickSection(show100k)});
})

function show100k(){
    const currentDiv = document.getElementById("100k-content");
    currentDiv.innerHTML = "";
    for (const city of cities){
        if (city.people >= 100000){
            city.name = city.name + " city";
        }
        addCity(city, currentDiv);
    }  
}


var count = document.getElementById("count");

count.addEventListener("click", function(){
    coll(this, function(){clickSection(showCount)});
})

function showCount(){
    const currentDiv = document.getElementById("count-content");
    currentDiv.innerHTML = "";

    let over = cities.filter((city) => city.people>=80000).length;
    let under = cities.length - over;


    const cityDiv = document.createElement("p");
    let text;
    if (over>under) text = "There are more cities with over than 80k people. ";
    else text = "There are more citites with under than 80k people. ";
    text += "Number of cities >80k: " + over;
    text += " Number of cities <80k: " + under;
    cityDiv.innerText = text;
    currentDiv.appendChild(cityDiv);
}

var mean = document.getElementById("mean");

mean.addEventListener("click", function(){
    coll(this, function(){clickSection(showAverageArea)});
})

function showAverageArea(){
    const currentDiv = document.getElementById("mean-content");
    currentDiv.innerHTML = "";
    let startWithP = cities.filter((city) => city.township[0]=="p");
    const average = startWithP.reduce((total, next) => total + next.area, 0) / startWithP.length;
    const cityDiv = document.createElement("p");
    cityDiv.innerText = "Average area is " + (Math.round(average * 100)/100).toFixed(2);
    currentDiv.appendChild(cityDiv);
}

var countPom = document.getElementById("count-pom");

countPom.addEventListener("click", function(){
    coll(this, function(){clickSection(showCountPom)});
})



function showCountPom(){
    const currentDiv = document.getElementById("count-content-pom");
    currentDiv.innerHTML = "";

    let pomorskieCitites = cities.filter((city) => city.province=="pomorskie");

    let over = pomorskieCitites.filter((city) => city.people>=80000).length;
    let under = pomorskieCitites.length - over;


    const cityDiv = document.createElement("p");
    let text="";
    if (under!=0) text += "There are cities in pomorskie with less than 5k people. ";
    text += "Number of cities >5k: " + over;
    text += " Number of cities <5k: " + under;
    cityDiv.innerText = text;
    currentDiv.appendChild(cityDiv);
}

function addCity(city, rootDiv) {
    const cityDiv = document.createElement("div");
    cityDiv.classList.add("city-box")
  
    const name = document.createElement("div");
    name.innerText =  city.name;
    cityDiv.appendChild(name);
    ;
  
    rootDiv.appendChild(cityDiv);
}