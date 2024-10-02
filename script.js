document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const infoPanel = document.getElementById('info-panel');
    const planetName = document.getElementById('planet-name');
    const planetDescription = document.getElementById('planet-description');
    const closePanel = document.getElementById('close-panel');

    const showPlanetInfo = (planet) => {
        const name = planet.getAttribute('data-name');
        const description = planet.getAttribute('data-description');

        planetName.textContent = name;
        planetDescription.textContent = description;

        infoPanel.style.display = 'block'; 
    };

    
    planets.forEach(planet => {
        planet.addEventListener('click', () => showPlanetInfo(planet));
    });


    closePanel.addEventListener('click', () => {
        infoPanel.style.display = 'none'; 
    });


    const toggleLightMode = () => {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        infoPanel.classList.remove('light-mode');
    };

    const toggleDarkMode = () => {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        infoPanel.classList.add('light-mode');
    };

    document.getElementById('light-mode').addEventListener('click', toggleLightMode);
    document.getElementById('dark-mode').addEventListener('click', toggleDarkMode);
});
