let player1, player2;
let currentPlayer;
let score = { player1: 0, player2: 0 };
let usedCities = [];

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('submit-city').addEventListener('click', submitCity);
document.getElementById('give-up').addEventListener('click', endGame);
document.getElementById('restart-button').addEventListener('click', restartGame);

function startGame() {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;

    if (player1 && player2) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
        currentPlayer = player1;
        updateTurnInfo();
    }
}

function submitCity() {
    const cityInput = document.getElementById('city-input').value.trim();
    
    if (cityInput && !usedCities.includes(cityInput)) {
        usedCities.push(cityInput);
        score[currentPlayer]++;
        document.getElementById('city-input').value = '';
        switchPlayer();
        updateScoreInfo();
    } else {
        alert('Город уже назван или неверный ввод. Попробуйте снова.');
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    updateTurnInfo();
}

function updateTurnInfo() {
    document.getElementById('turn-info').innerText = `Ход игрока: ${currentPlayer}`;
}

function updateScoreInfo() {
    document.getElementById('score-info').innerText = `${player1}: ${score.player1} | ${player2}: ${score.player2}`;
}

function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('final-score').innerText = `Счет: ${player1} - ${score.player1}, ${player2} - ${score.player2}`;
}

function restartGame() {
    player1 = '';
    player2 = '';
    currentPlayer = '';
    score = { player1: 0, player2: 0 };
    usedCities = [];
    
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('score-info').innerText = '';
    document.getElementById('turn-info').innerText = '';
}