

// apikey
let apiKey='c4c0d178921a8e06f36b75678f9dad60'
// apiUrl 
let baseUrl=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

// iconUrl
// https://openweathermap.org/img/wn/10d@2x.png


// access the DOMElements 
let cityName=document.querySelector(".cityname") 
let iconEle=document.querySelector(".weather-icon")
let tempEle=document.querySelector(".temp")
let cityEle=document.querySelector(".city")
let RealFeelShadeEle=document.querySelector(".RealFeelShade")
let windEle=document.querySelector(".wind")
let airEle=document.querySelector(".airQuality")

function fetchWeather(){
    let city=cityName.value
    console.log(city)
    if(city===""){
        alert("enter the city name")
    }else{
        let data=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        data.then(res=>res.json())
            .then(val=>{
                console.log(val)
                const {main,wind,weather,name}=val 
                const {description,icon}=weather[0]
                const {temp,feels_like}=main
                iconEle.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
                cityEle.innerHTML=`<p class="city"><span class="fw-bold">Location :</span>${name}</p>`
                tempEle.innerHTML=` <h2 class="temp"><span class="fw-bold ">Temperature:</span>${temp.toFixed(2)}<sup>&deg;</sup><sub>c</sub></h2>`
            })
    }
}




// // Destructuring : 
// let data={
//     name:"hyderabad",
//     wind:{speed:20},
//     weather:[1,3]
// }

// console.log(data.name)
// console.log(data.wind.speed)
// console.log(data.weather[0])

// // ES6 

// const {name,wind:{speed}}=data
// console.log(name)
// console.log(speed)

// const arr=[1,3,4,5]
// console.log(arr[0])
// console.log(arr[1])

// // es6 way of destructuring
// const [a,b]=arr
// console.log(a,b)


// Promise 
// States of Promise 
// 1.Pending 
// 2.fullfilled
// 3.rejected

// www.insta.com(Pending )---->fullfilled--rejected

// creating the Promise
let data=new Promise((resolve, reject) => {
    let Status=200
    if(Status===200){
        resolve(1)
    }else{
        reject("failed to fetch")
    }
    
})
data.then((res)=>res*8)
    .then(res=>res*2)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

let data1=fetch(`https://api.openweathermap.org/data/2.5/weather?q=goa&appid=${apiKey}`)
 data1.then((res)=>res.json())
       .then(res=>console.log(res))