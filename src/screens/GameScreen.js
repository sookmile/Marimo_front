import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SpellingGame from './SpellingGame';
import SpellingGameResult from './SpellingGameResult';
import GameRank from './GameResult';
import GameMain from './GameMain';

const GameStack = createStackNavigator();

const Game = () => {
    return(
      <GameStack.Navigator>
        <GameStack.Screen
            name="GameMain"
            component={GameMain}
            options={{headerShown: false}}
          />
        <GameStack.Screen
            name="SpellingGame"
            component={SpellingGame}
            options={{headerShown: false}}
          />
          <GameStack.Screen
            name="SpellingGameResult"
            component={SpellingGameResult}
            options={{headerShown: false}}
          />
          <GameStack.Screen
            name="GameRank"
            component={GameRank}
            options={{headerShown: false}}
          />
      </GameStack.Navigator>
    )
  }

  export default Game;