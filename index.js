function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// form logic
function handleForm(e) {
    e.preventDefault()
    let location = document.getElementById("location").value
    retrieveData(location)

}
// retrieveData
async function retrieveData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=edb1d036f40a4ef9e56fd19e59054adf&units=metric`
    let response = await fetch(url, { mode: "cors" })
    let data = await response.json()
    updateData(data)

}
// updateData
function updateData(data) {
    document.getElementById('location-name').textContent = data['name']
    document.getElementById('temperature').textContent = 'Temperature: ' + data['main']['temp'] + '°C'
    document.getElementById('feels-like').textContent = 'Feels like ' + data['main']['feels_like'] + '°C'
    document.getElementById('wind').textContent = 'Wind speed: ' + data['wind']['speed'] + 'm/s'
    document.getElementById('description').textContent = capitalizeFirstLetter(data['weather'][0]['description'])
}
// event listener
document.addEventListener('submit', handleForm);
//IFFE
(async function runOnStart(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=edb1d036f40a4ef9e56fd19e59054adf&units=metric`
    let response = await fetch(url, { mode: "cors" })
    let data = await response.json()
    updateData(data)
})('toronto')