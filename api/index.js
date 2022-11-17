let searchBtn = document.getElementById("search-btn")
let countryInt = document.getElementById("country-inp")
let result = document.getElementById("result")



searchBtn.addEventListener("click" , ()=>{

    let countryName = countryInt.value;
    let finalUrl = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
    console.log(finalUrl)
    fetch(finalUrl).then((response) => response.json())
    .then((data)=>{
//   console.log(data[0])

    result.innerHTML = `
    <div class="text-center mt-5">
        <img src="${data[0].flags.svg}" width="200" >
        <h2 class="mt-4">${data[0].name}</h2>
        </div>


        <div class="mt-4">
    <h6 class=" ">Capital :  <span class ="fs-6 fw-normal">${data[0].capital}</span>
    </h6>
   
    <h6 class="">Continent :  <span class ="fs-6 fw-normal">${data[0].region}</span></h6>
    
    <h6 class="">Population :  <span class ="fs-6 fw-normal">${data[0].population}</span></h6>

    <h6 class="">Currency :  <span class ="fs-6 fw-normal">${
        data[0].currencies[Object.keys(data[0].currencies)].name
      } </span></h6>

      <h6 class="">Common Language :  <span class ="fs-6 fw-normal">${data[0].languages[0].name}</span></h6>
    
        </div>



    
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h6 class=" fw-normal  mt-3">The input field cannot be empty</h6>`;
      } else {
        result.innerHTML = `<h6  class="fw-normal mt-3">Please enter a valid country name.</h6>`;
      }
    });



});