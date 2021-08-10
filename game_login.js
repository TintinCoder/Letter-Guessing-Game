console.log('This Is A Word Guessing Game');

function addUser() {
    var player_1 = document.getElementById('player1_name_input').value;
    var player_2 = document.getElementById('player2_name_input').value;
    localStorage.setItem('Player 1 Name', player_1);
    localStorage.setItem('Player 2 Name', player_2);
    window.location = 'game_page.html';
}