document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'https://v3.football.api-sports.ioc10fe51d409b29d76ef8e7396a6a8257';
  const apiUrl = 'https://v3.football.api-sports.io/fixtures?league=71&season=2023';

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  })
  .then(response => response.json())
  .then(data => {
    const matches = data.response;
    const matchesContainer = document.getElementById('matches');

    matches.forEach(match => {
      const matchElement = document.createElement('div');
      matchElement.className = 'match';
      matchElement.innerHTML = `
        <h2>${match.teams.home.name} vs ${match.teams.away.name}</h2>
        <p>${new Date(match.fixture.date).toLocaleString()}</p>
        <p>Score: ${match.goals.home} - ${match.goals.away}</p>
      `;
      matchesContainer.appendChild(matchElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
});
