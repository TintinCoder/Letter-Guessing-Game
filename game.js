var player1 = localStorage.getItem("player_1_name");
var player2 = localStorage.getItem("player_2_name");
console.log(player1, player2);
var score1 = 0;
var score2 = 0;
console.log(score1, score2);
document.getElementById("player_1_name").innerHTML = player1 + " -:";
document.getElementById("player_2_name").innerHTML = player2 + " -:";
document.getElementById("player_1_Score").innerHTML = score1;
document.getElementById("player_2_Score").innerHTML = score2;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;
document.getElementById("player_ques").innerHTML = "Question Turn - " + player1;

// Send Function
function send() {
    var get_word = document.getElementById('input_word').value;
    var word = get_word.toLowerCase();
    console.log(word, get_word);

    var char1 = word.charAt(1);
    console.log(char1);

    var divided_length = Math.floor(word.length/2);
    var char2 = word.charAt(divided_length);
    console.log(char2)

    var minus_length = word.length - 1;
    var char3 = word.charAt(minus_length);
    console.log(char3);
    // Replace Them
    var remove_char1 = word.replace(char1, "_");
    var remove_char2 = remove_char1.replace(char2, "_");
    var remove_char3 = remove_char2.replace(char3, "_");
    var final_name = remove_char3;
    console.log(final_name);
    // HTML DATA
    var question = "<br><h4 id='question_name'>Q. "+final_name+"</h4><br>";
    var input_box = "<br>Answer: <input id='input' type='text'></input><br>";
    var button = "<br><button id='btn' class='btn btn-info' onclick='check();'>Check</button><br>";
    var row = question + input_box + button;
    var output = document.getElementById("output");
    output.innerHTML = row;
}
console.log(final_name);
// Check Function
function check() {
    var question_turn = "Player1";
    var answer_turn = "Player2";
    var get_answer = document.getElementById('input').value;
    var get_word = document.getElementById('input_word').value;
    var word = get_word.toLowerCase();
    // Lower Case Conversion
    var answer = get_answer.toLowerCase();
    console.log(answer);
    localStorage.setItem("Answer", answer);
    if (word == answer) {
        if (answer_turn == "Player1") {
            score1 = score1 + 1;
            document.getElementById('player_1_Score').innerHTML = score1;
            console.log(score1);
            console.log("Correct Answer");
            localStorage.setItem("Player 1 Score", score1);
        }
        else{
            score2 = score2 + 1;
            document.getElementById('player_2_Score').innerHTML = score2;
            console.log(score2);
            localStorage.setItem("Player 2 Score", score2);
            console.log("Correct Answer Player 2")
        }
    }
    if (question_turn == "Player1") {
        question_turn = "Player2";
        document.getElementById('player_ques').innerHTML = "Question Turn - " + player2;
    }
    else{
        question_turn = "Player1";
        document.getElementById('player_ques').innerHTML = "Question Turn - " + player1;
    }
    if (answer_turn == "Player1") {
        answer_turn = "Player2";
        document.getElementById('player_answer').innerHTML = "Answer Turn - " + player2;
    }
    else{
        answer_turn = "Player1";
        document.getElementById('player_answer').innerHTML = "Answer Turn - " + player1;
    }
    document.getElementById('output').innerHTML = " ";
}