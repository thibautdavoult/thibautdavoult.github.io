# coolbloqs
Game made in 5 days during Ironhack bootcamp (week3).

http://thibautdavoult.com/coolbloqs

## Rules

Inspired by [Flood It](http://unixpapa.com/floodit/).

The game starts as a grid filled with tiles of different colors (randomized, up to 4 colors max).

Player1 starts at the top left corner. Player2 starts at the bottom right corner. The game is turn based.

Player 1 moves first. Picks a color from a tile adjacent to the one on the top left corner to "absorb" it.
Player 1's turn ends. Player 2's turn starts.
Player 2 also turns his tile into a bigger one by picking the color of an adjacent(s) tile(s).
Etc.

Game keeps going until :
- One player absorbs the other one.

## Must have features

- Randomized board creation (done)
- Color switching & global mechanic (which tiles switch, which don't, etc) (done)
- 2 players (done)
- End of game (message appears but players can keep playing)
- Prevent switching to a color without touching at least one tile of that color
- Ending screen, counting tiles to declare winner (not needed in current iteration)


## Nice to have features (importance from + to ++)

- UI stuff to improve understanding of the rules, especially on first visit
- Changing size of the board (++)
- Colorblind mode (++)
- Changing color scheme of tiles (+)
- Nightmode (+)
