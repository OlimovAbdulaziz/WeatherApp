const KEY = "ea61fa9d5897fc620694201fe223b041"

// request get data

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)
    return data
}

const result = getData('London').then((data) => console.log(data))
console.log(result)