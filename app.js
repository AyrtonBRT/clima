// API Key  OpenWeatherMap
const apiKey = 'T80de522c316088b3079fbf54b137c8bc';

// URL de la API
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=concepcion%20del%20uruguay,3260&appid=80de522c316088b3079fbf54b137c8bc`;

// Elemento contenedor para las tarjetas de clima
const weatherContainer = document.querySelector('.weather-container');

// Función para obtener y mostrar los datos del clima
async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Crear la tarjeta de clima
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weather-card');
        weatherCard.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperatura: ${data.main.temp} °K</p>
            <p>Clima: ${data.weather[0].description}</p>
        `;

        // Agregar la tarjeta al contenedor
        weatherContainer.appendChild(weatherCard);
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
    }
}

// Llamar a la función para obtener los datos del clima al cargar la página
getWeatherData();
