import React, { useState } from 'react';
import './InnerComCss/gamebuttons.css';
import { Link } from 'react-router-dom';


export default function Gamebuttons() {
    const [resultMessage, setResultMessage] = useState('');
    const [gameCompleted, setGameCompleted] = useState(false);
    const [showButton, setShowButton] = useState(false);

    

    
    const score = JSON.parse(localStorage.getItem('score')) || {  //Retrieve the score from local storage or initialize to default
    wins: 0,
    losses: 0,
    ties: 0
    };

    let computer;
    
    function computer_selection() {      //randomly choose computer's move
     let randomNumber = Math.random();
        if (randomNumber <= 1 / 3) {
            computer = 'Rock';
        } else if (randomNumber <= 2 / 3) {
            computer = 'Paper';
        } else {
            computer = 'Scissors';
        }
    }

    function handleResult() {
        // Replace `score.wins` with the actual variable or prop containing the score
        if (score.wins >= 2) {  // check if won 6 games
            setResultMessage(" Congratulations !! You won 2 tickets!");
            setShowButton(true);
        } else {
            setResultMessage("You did not win 2 tickets. Please reset and play again.");
            setShowButton(false);
        }
    }

    function play_game(playerMove) {   //play the game and determine the result
        if (gameCompleted) {
            setResultMessage("OK! 10 chances are over. Please ckeck the result option.");
            return;
        }

    computer_selection();
    let result = '';
        if (playerMove === 'Rock') {
            result = computer === 'Rock' ? 'Tie' : (computer === 'Paper' ? 'Lose' : 'Win');
        } else if (playerMove === 'Paper') {
            result = computer === 'Rock' ? 'Win' : (computer === 'Paper' ? 'Tie' : 'Lose');
        } else { // Scissors
            result = computer === 'Rock' ? 'Lose' : (computer === 'Paper' ? 'Win' : 'Tie');
        }

    // Update the score
        if (result === 'Win') {
            score.wins++;
        } else if (result === 'Lose') {
            score.losses++;
        } else {
            score.ties++;
        }
    localStorage.setItem('score', JSON.stringify(score));        // Save the updated score to local storage
    
    const totalGames = score.wins + score.losses + score.ties;       // Calculate the total games played

    // Check if the user has played exactly 10 games and won 7 games
        if (totalGames === 10) { //played exactly 10 games
        setGameCompleted(true);  // Mark the game as completed after 10 games
           
             
        } 
        else {
            setResultMessage(
                <>
                  <div>Visit SriLanka - {computer}, you- {playerMove}</div>
                  <div>Result: {result}</div>
                  <div>
                    Wins - {score.wins}, Losses - {score.losses}, Ties - {score.ties}
                  </div>
                </>
                );
            }
    }

    // Function to reset the score and allow the game to be played again
    function reset_score() {
     score.wins = 0;
     score.losses = 0;
     score.ties = 0;
     localStorage.setItem('score', JSON.stringify(score));
     setResultMessage("Score reset to 0!");
     setGameCompleted(false); // Allow to play again from begining after resetting 
    }

    return ( //return part to display
        <div className="rock-paper-scissor">
            <button onClick={() => play_game('Rock')} >Rock</button>
            <button onClick={() => play_game('Paper')}>Paper</button>
            <button onClick={() => play_game('Scissors')}>Scissors</button>
            <button onClick={reset_score}>Reset the score</button>

            <div className="result-box"> 
            <button class="check_res" onClick={handleResult}>Check the result </button>
            <p>{resultMessage}</p>
            {showButton && 
             <Link to="/TicketClaim">
             <button>Claim tickets</button>
             </Link>}
            </div>
        </div>
    );
}
