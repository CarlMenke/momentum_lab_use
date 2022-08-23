const setBackGourndImage = async () =>{
    let response = await axios.get('https://api.unsplash.com/photos/random/?client_id=q7_-eEbuDJXNJo1hqmJqkM81oyibAv0rCLoha0SAtHk')
    document.body.style.backgroundImage = `url('${response.data.urls.regular}')`;
}

setBackGourndImage();

const getWeather = async () =>{
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=34&lon=-118&units=imperial&APPID=abc1662838d3ca8a907b02dcdf49dbfa`)
    document.getElementById('weather').innerHTML = `☀ ${Math.floor(Number(response.data.main.temp))}`;
    }

getWeather();

const getQuote = async () =>{
    let response = await axios.get(` http://quotes.stormconsultancy.co.uk/random.json`)
    console.log(response);
    document.getElementById('quote').innerHTML = response.data.quote;
    }

getQuote();

let time = moment().format('LTS')
document.getElementById('time').innerHTML = time;

