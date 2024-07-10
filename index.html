document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'https://v3.football.api-sports.ioc10fe51d409b29d76ef8e7396a6a8257';
  const leagueId = 71; // ID da Série A Brasileira na API
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
    const leagueInfo = data.response[0]; // Informações da primeira liga encontrada
    console.log('Informações da Liga:', leagueInfo);
    // Aqui você pode processar e exibir as informações da liga como desejar
    const leagueContainer = document.getElementById('league-info');
    leagueContainer.innerHTML = `
      <h2>${leagueInfo.league.name}</h2>
      <p>País: ${leagueInfo.country.name}</p>
      <p>Temporada atual: ${leagueInfo.seasons[0].year}</p>
      <p>Descrição: ${leagueInfo.league.description}</p>
    `;
  })
  .catch(error => console.error('Erro ao buscar informações da liga:', error));
});
