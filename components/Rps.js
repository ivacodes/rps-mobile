import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

class Rps extends Component {
  state = {
    options: ["💎", "📜", "✂️"],
    playerChoice: "",
    computerChoice: "",
    playerScore: 0,
    computerScore: 0,
    message: "",
  };

  getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
  };

  getPlayerChoice = (choice) => {
    let playerChoice = choice;
    let computerChoice = this.getComputerChoice();
    this.getWinner(playerChoice, computerChoice);
    this.setState({ playerChoice, computerChoice });
  };

  getWinner = (playerChoice, computerChoice) => {
    let resMessage = "";
    if (playerChoice === computerChoice) {
      resMessage = "It's a tie!";
    } else if (
      (playerChoice === 0 && computerChoice === 2) ||
      (playerChoice === 1 && computerChoice === 0) ||
      (playerChoice === 2 && computerChoice === 1)
    ) {
      resMessage = "Human wins this time!";
      this.updateScore("H");
    } else {
      resMessage = "Our AI Overlords win! No one is surprised.";
      this.updateScore("AI");
    }

    this.setState({
      message: resMessage,
    });
  };

  updateScore = (winner) => {
    const { playerScore, computerScore } = this.state;
    if (winner === "H") {
      let score = playerScore + 1;
      this.setState({ playerScore: score });
    } else if (winner === "AI") {
      let score = computerScore + 1;
      this.setState({ computerScore: score });
      console.log(computerScore);
    }
  };

  resetGame = () => {
    this.setState({
      playerChoice: "",
      computerChoice: "",
      playerScore: 0,
      computerScore: 0,
    });
  };

  render = () => {
    const {
      options,
      playerChoice,
      computerChoice,
      message,
      playerScore,
      computerScore,
    } = this.state;
    return (
      <View style={styles.choiceContainer}>
        {options.map((option, i) => (
          <Text
            key={i}
            className='option'
            onPress={() => this.getPlayerChoice(i)}
          >
            {option}
          </Text>
        ))}
        <Text style={styles.resultContainer}>
          {playerChoice !== "" ? (
            <Text>
              You {options[playerChoice]} VS {options[computerChoice]} AI
              {message}
            </Text>
          ) : null}
        </Text>
        {playerChoice !== "" ? (
          <Text style={styles.scoreContainer}>
            <Text>Human: {playerScore}</Text>
            <Text>AI: {computerScore}</Text>
          </Text>
        ) : null}

        {playerChoice !== "" ? (
          <Text onPress={() => this.resetGame()}>Reset</Text>
        ) : null}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  choiceContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  scoreContainer: {
    width: "90%",

    justifyContent: "space-around",
  },
  resetButton: {
    width: "90%",
  },
});

export default Rps;
