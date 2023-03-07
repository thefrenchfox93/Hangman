import React, { Component } from "react";
import { randomWord } from './words';

import "./Hangman.css";

import img1 from "./images/state1.GIF";
import img2 from "./images/state2.GIF";
import img3 from "./images/state3.GIF";
import img4 from "./images/state4.GIF";
import img5 from "./images/state5.GIF";
import img6 from "./images/state6.GIF";
import img7 from "./images/state7.GIF";
import img8 from "./images/state8.GIF";
import img9 from "./images/state9.GIF";
import img10 from "./images/state10.gif";
import img11 from "./images/state11.GIF";

class Hangman extends Component {
  /** by default, allow 11 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 11,
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]
  };

  constructor(props) {
    super(props);

    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      // answer: "apple"
      answer: randomWord() 
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.showHelp = this.showHelp.bind(this);
  }

  // reset the game and put things in default
  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    // deconstructor
    const { answer, guessed } = this.state;

    return answer
      .split("")
      .map(ltr => (guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    const  { handleGuess } = this;
    const { guessed } = this.state;

    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button id="Hangman-letter"
        key={index}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** showHelp: show a random letter from the answer */
  showHelp() {
    const { answer, guessed } = this.state;

    // Find a random letter from the answer that hasn't been guessed yet
    let helpLetter = null;
    while (!helpLetter) {
      const randomIndex = Math.floor(Math.random() * answer.length);
      const letter = answer[randomIndex];
      if (!guessed.has(letter)) {
        helpLetter = letter;
      }
    }

    // Add the letter to the guessed set
    this.setState(st => ({
      guessed: st.guessed.add(helpLetter)
    }));
  }

  /** render: render game */
  render() {
    const { nWrong, answer, help } = this.state;
    const { images, maxWrong } = this.props;

    let alternateText = `${nWrong} wrong guesses`;

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={images[nWrong]} alt={alternateText}/>
        <p>Number Wrong: {nWrong}</p>
        
        { answer === this.guessedWord().join("") ? <p>Winner!</p> :
          (nWrong === maxWrong ?
            <div>
              <p> Loser! </p>
              <p>The correct Word is: {answer}</p>
            </div>
            :
            <div>
              <p className='Hangman-word'>{this.guessedWord()}</p>
              <p id='Hangman-btns'>{this.generateButtons()}</p>
            </div>
          )
        }

        <button id='reset' onClick={this.resetGame}>Reset Game</button>

        {/* Help Button */}
        <button 
          id ='Help-button' 
          onClick={() => {
            const word = this.state.answer;
            const guessed = new Set(this.state.guessed);
            let letter = '';

            // find a letter that hasn't been guessed yet
            for (let i = 0; i < word.length; i++) {
              if (!guessed.has(word[i])) {
                letter = word[i];
                break;
              }
            }

            // update state with the letter
            this.setState(st => ({
              guessed: st.guessed.add(letter)
            }));
          }}
          disabled={help}
        >
          Help
        </button>
      </div>
    );
  }
}

export default Hangman;
