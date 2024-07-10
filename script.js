document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'https://v3.football.api-sports.ioc10fe51d409b29d76ef8e7396a6a8257';
  const leaguesUrl = 'https://v3.football.api-sports.io/leagues';

  fetch(leaguesUrl, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  })
  .then(response => response.json())
  .then(data => {
    const leagues = data.response;
    const leaguesListContainer = document.getElementById('leagues-list');

    leagues.forEach(league => {
      const leagueElement = document.createElement('div');
      leagueElement.className = 'league-item';
      leagueElement.innerHTML = `
        <h2>${league.league.name}</h2>
        <p>País: ${league.country.name}</p>
        <p>Descrição: ${league.league.description}</p>
        <button onclick="fetchLeagueInfo(${league.league.id})">Ver Detalhes</button>
      `;
      leaguesListContainer.appendChild(leagueElement);
    });
  })
  .catch(error => console.error('Erro ao buscar informações das ligas:', error));
});

function fetchLeagueInfo(leagueId) {
  const apiKey = 'https://v3.football.api-sports.ioc10fe51d409b29d76ef8e7396a6a8257';
  const leagueUrl = `https://v3.football.api-sports.io/leagues?id=${leagueId}`;

  fetch(leagueUrl, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  })
  .then(response => response.json())
  .then(data => {
    const leagueInfo = data.response[0];
    console.log('Informações da Liga:', leagueInfo);
    const leagueInfoContainer = document.getElementById('league-info');
    leagueInfoContainer.innerHTML = `
      <h2>${leagueInfo.league.name}</h2>
      <p>País: ${leagueInfo.country.name}</p>
      <p>Descrição: ${leagueInfo.league.description}</p>
    `;
  })
  .catch(error => console.error('Erro ao buscar informações da liga:', error));
}
