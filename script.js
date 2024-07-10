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

    const leaguesContainer = document.getElementById('leagues');
    leagues.forEach(league => {
      const leagueElement = document.createElement('div');
      leagueElement.classList.add('league-item');
      leagueElement.innerHTML = `
        <h3>${league.league.name}</h3>
        <p>País: ${league.country.name}</p>
        <p>Descrição: ${league.league.description}</p>
      `;
      leagueElement.addEventListener('click', function() {
        fetchLeagueDetails(league.league.id);
      });
      leaguesContainer.appendChild(leagueElement);
    });
  })
  .catch(error => console.error('Erro ao buscar ligas:', error));

  function fetchLeagueDetails(leagueId) {
    const leagueDetailsUrl = `https://v3.football.api-sports.io/leagues?id=${leagueId}`;

    fetch(leagueDetailsUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    })
    .then(response => response.json())
    .then(data => {
      const leagueDetails = data.response[0];
      const leagueDetailsContainer = document.getElementById('league-details');
      leagueDetailsContainer.innerHTML = `
        <h3>${leagueDetails.league.name}</h3>
        <p>País: ${leagueDetails.country.name}</p>
        <p>Descrição: ${leagueDetails.league.description}</p>
        <p>Temporada Atual: ${leagueDetails.seasons[0].start} - ${leagueDetails.seasons[0].end}</p>
        <p>Última Atualização: ${new Date(leagueDetails.league.updated_at).toLocaleString()}</p>
      `;
    })
    .catch(error => console.error('Erro ao buscar detalhes da liga:', error));
  }
});
