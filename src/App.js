import React, { Component } from "react";
import "./styles.css";
import Hangman from "./Hangman";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman />
      </div>
    );
  }
}

export default App;


// The game you create should meet the following criteria:
// 1. It should be created using Create React App.
// 2. It should include attractively styled components (at least 4 different types of
// components) that respond to user interaction. Feel free to use
// React-Bootstrap or another library and/or your own custom stylesheets.
// 3. A number of components should be rendered using the array.Map()
// method. Each component rendered in this way should have a key that
// uniquely identifies it.
// 4. User interaction should modify the state of some components.
// 5. The state of two or more components should be synced.
// 6. The user should be able to restart the game.
// 7. The user should be clearly informed if they have “won” or “lost” the game.
// 8. The user should easily be able to request “help” that will inform the user
// about the rules of the game from the UI.
// 9. The UI should be attractive, easy to use and intuitive.
// 10. It should include a file called “readme.md” which explains the rules of the
// game. This file should also provide clear instructions that an end user will be
// able to follow to be able to install and run your app on their local machine.
// You can read more about the README GitHub guide here.
// 11. The expert code reviewer should be able to launch your app by typing ‘npm
// start’ from the command line interface.
// 12. The file structure of the project should be well organised in line with
// guidelines here. The code should also be easy to read adhering to Google’s
// style guide about indentation, meaningful variable and component names
// etc.
// 13. Your code should be well documented with appropriate comments.

// The game you create should meet the following criteria:
// 2. It should include attractively styled components (at least 4 different types of
// components) that respond to user interaction. Feel free to use
// React-Bootstrap or another library and/or your own custom stylesheets.

// 8. The user should easily be able to request “help” that will inform the user
// about the rules of the game from the UI.
// 10. It should include a file called “readme.md” which explains the rules of the
// game. This file should also provide clear instructions that an end user will be
// able to follow to be able to install and run your app on their local machine.
// You can read more about the README GitHub guide here.
// 11. The expert code reviewer should be able to launch your app by typing ‘npm
// start’ from the command line interface.

// 13. Your code should be well documented with appropriate comments.