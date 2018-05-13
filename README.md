# Pig Dice

## By [https://github.com/detectiveyego](**Edgar Kibet**)

### Description

_This is a web application where two users can play Pig Dice against each other. Users can choose to play with one die or two._

### Setup/Installation Requirements
1.Git clone [https://github.com/detectiveyego/Pig-Dice.git](https://github.com/detectiveyego/Pig-Dice.git)
2. Open the index.html file with the browser of your choice

### Specifications
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Player 1 inputs name and Player 2 inputs name, and clicks start button | Player 1: Edgar / Player 2: Vincent / Click PLAY | Game launched |
| Player 1 clicks Roll button | Click Roll The Dice button | Dice rolls and number is generated
| If Player 1 rolls any number other than 1, that roll is added to Current Score | Roll = 2 | Current Score = 2  |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Current Score = 0 / Round Score = 0 / Player 2 begins |
| Player 2 clicks on Roll The Dice button| Roll = 1 | Current Score = 0 / Round Score = 0 / Player 1 begins |
|When a Player clicks hold button|CURRENT score gets added to his/her ROUND score. |It's the next player's turn
| When a player's Round Score reaches 100 or more, game ends and winner page shows | Player 1 Round Score = 100 | Winner Alert Message|

#### Known Bugs
No known bugs.

#### Support and contact details
>Please feel free to contact [kibetedgar@gmail.com](kibetedgar@gmail.com) if you have any issues or questions, ideas or concerns.

### Technologies Used
HTML
CSS
JavaScript
jQuery

### License

This software is licensed under the MIT license.

Copyright (c) 2018 [https://opensource.org/licenses/MIT](Edgar Kibet)
