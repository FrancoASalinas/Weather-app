//store DOM elements references in variables
const cityName = document.querySelector('.article--city-name');
const state = document.querySelector('.article--city-state');
const temp = document.querySelector('.article--weather-temp');
const img = document.querySelector('.article-img');
const header = document.querySelector('.header');
const article = document.querySelector('.article');
const loader = document.querySelector('.loader--container')
//store url and key references in vaariables
const url = 'http://api.weatherapi.com/v1';
const key = '20a0dec8e429449684c184436230505';
//call the API using fetch
fetch(`${url}/current.json?&key=${key}&q=London`)
.then(response => {     //when the promise is fulfilled

    if(!response.ok){ //if the response isn't ok throw error
        throw new Error(err=>console.log(err))
    }
    //return response as json data
    return response.json()
})
//then call function using json data
.then(data => mostrarClima(data))
//error handling if any promises don`t succed
.catch(err => console.error(err))


function mostrarClima(data){
    console.log(data)
    if(data.location.region){
        cityName.textContent += `, ${data.location.region}`
    }
    cityName.textContent = `${data.location.name}`;
    state.textContent = `${data.location.country}`;
    temp.textContent = `${data.current.temp_c}º`;
    img.src = `https:${data.current.condition.icon}`;

    header.style.display = 'flex';
    article.style.display = 'flex';
    loader.style.display = 'none'
}










