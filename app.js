'use strict';


var films = [
  { 
      id: 1, 
      name: "The Shawshank Redemption", 
      date: dayjs("01/01/1994"),
      rate: 5,
      favorite: true
      
  },
  { 
      id: 2,
      name: "The Godfather", 
      date: dayjs("01/01/1972"),
      rate: 3,
      favorite: false
      
  },
  { 
      id: 3, 
      name: "The Dark Knight", 
      date: dayjs("01/01/2008"),
      rate: 4,
      favorite: true
      
  },
  { 
      id: 4, 
      name: "Shrek", 
      date: dayjs("01/01/2008"),
      rate: 5,
      favorite: true
    
  },
  { 
    id: 5, 
    name: "Yali Chapkini", 
    date: dayjs("01/01/2024"),
    rate: 1,
    favorite: false
  
},
];









addButton.addEventListener('click', (event) => {
    console.log("You selected ADD");

})







// Click ALL --------------------------------------------

const allLink = document.getElementById('allLink');
const table  = document.getElementById("Films-table")
allLink.addEventListener('click', (event) => {
    console.log("you Clicked on ALL");


//Reset the innerHTML when a new integer is inserted
table.innerHTML = "";

    
  // generate the table content starting from this list
  for(const film of films) {
    var checkbox;
    if(film.favorite === true){
      checkbox = "checked";
    }
    else{
      checkbox = "";
    }
    const tr = document.createElement("tr")
    table.appendChild(tr)
    tr.innerHTML = `
    <td>${film.name}</td>

    <td>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" ${checkbox} disabled>
          <label class="form-check-label" for="flexCheckCheckedDisabled">
          
          </label>
        </div>
    </td>

                          
      <td>${film.date.format('DD/MM/YYYY')}</td>

      <td>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width: ${(film.rate * 20 )}%">${(film.rate * 20 )}%</div>
      </div>
      </td>


        <td>
        <button type="button" class="btn btn-light"><i class="bi bi-pencil-square"></i></button> 
        <button type="button" class="btn btn-light"><i class="bi bi-trash3"></i></button></td>

    `
  }
})





// Click Best Rated --------------------------------------------

const bestRatedlink = document.getElementById('bestRateLink');
const table_bestrated  = document.getElementById("Films-table")
bestRatedlink.addEventListener('click', (event) => {
    console.log("you Clicked on BESTRATED");


//Reset the innerHTML when a new integer is inserted
table_bestrated.innerHTML = "";

    
  // generate the table content starting from this list
  
  for(const film of films) {
    var checkbox;
    if(film.favorite === true){
      checkbox = "checked";
    }
    else{
      checkbox = "";
    }
    if (film.rate === 5) {

    const tr = document.createElement("tr")
    table_bestrated.appendChild(tr)
    tr.innerHTML = `
    <td>${film.name}</td>

    <td>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" ${checkbox} disabled>
    <label class="form-check-label" for="flexCheckCheckedDisabled">
    
    </label>
    </div>
    </td>

                          
      <td>${film.date.format('DD/MM/YYYY')}</td>

      <td>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width: ${(film.rate * 20 )}%">${(film.rate * 20 )}%</div>
      </div>
      </td>


        <td>
        <button type="button" class="btn btn-light"><i class="bi bi-pencil-square"></i></button> 
        <button type="button" class="btn btn-light"><i class="bi bi-trash3"></i></button></td>

    `
      
    }
    else {
      console.log("no bast rated film")
      

    }
    
  }
})






// Click Seen Last Month ---------------------------------------------

const lastMonthlink = document.getElementById('lastMonthLink');
const table_lastMnoth  = document.getElementById("Films-table")
lastMonthlink.addEventListener('click', (event) => {
    console.log("you Clicked on LASTMONTH");
    


//Reset the innerHTML when a new integer is inserted
table_lastMnoth.innerHTML = "";

    
  // generate the table content starting from this list
  
  for(const film of films) {
    var checkbox;
    if(film.favorite === true){
      checkbox = "checked";
    }
    else{
      checkbox = "";
    }

    if (film.rate === 5){

      
    const tr = document.createElement("tr")
    table_bestrated.appendChild(tr)

    
    
    tr.innerHTML = `
    <td>${film.name}</td>

    <td>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" ${checkbox} disabled>
    <label class="form-check-label" for="flexCheckCheckedDisabled">
    
    </label>
    </div>
    </td>

                          
      <td>${film.date.format('DD/MM/YYYY')}</td>

      <td>
      <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width: ${(film.rate * 20 )}%">${(film.rate * 20 )}%</div>
      </div>
      </td>


        <td>
        <button type="button" class="btn btn-light"><i class="bi bi-pencil-square"></i></button> 
        <button type="button" class="btn btn-light"><i class="bi bi-trash3"></i></button></td>

    `


    }

    
  }
})


