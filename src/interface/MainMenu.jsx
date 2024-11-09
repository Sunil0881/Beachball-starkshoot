import { useState } from "react";
import useGame from "../stores/useGame.js";
import LogoBall from "../assets/logo_ball_stroke.svg";
import Wordmark from "../assets/wordmark.svg";
import gryLogo from "../../src/assets/gryffindors logo.png";
import { getLocalStorage, setLocalStorage } from "../stores/utils.js";
import Navbar from "./Navbar.jsx";

export default function MainMenu() {
  const {
    mode,
    setMode,
    blocksCount,
    setBlocksCount,
    level,
    setLevel,
    difficulty,
    setDifficulty,
    setIsInGame,
    setScore,
  } = useGame();

  const [isSettings, setIsSettings] = useState(false);
  const [score, setScoreState] = useState(0); 

  // Event listener for Enter key
  document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      setIsInGame(true);
    }
  });

  // Function to calculate score based on difficulty and blocks count
  const calculateScore = (difficultyLevel, blocksCount) => {
    let multiplier;

    switch (difficultyLevel) {
      case 1:
        multiplier = 10;
        break;
      case 3:
        multiplier = 20;
        break;
      case 5:
        multiplier = 30;
        break;
      case 10:
        multiplier = 40;
        break;
      default:
        multiplier = 10; // Default to the easiest difficulty if there's an issue
    }

    const score = multiplier * blocksCount;
    console.log("blocksCount:", blocksCount);
    console.log("Dlevel:", multiplier);
    console.log("Calculated Score:", score);
    return score;
  };

  // Update score when blocks count or difficulty changes
const handleBlocksCountChange = (count) => {
  setBlocksCount(count);
  setLocalStorage("blocksCount", count);
  const score = calculateScore(difficulty, count);
  
  setScore(score); // Update global score in store
};

const handleDifficultyChange = (difficultyLevel) => {
  setDifficulty(difficultyLevel);
  setLocalStorage("difficulty", difficultyLevel);
  const score = calculateScore(difficultyLevel, blocksCount);
  setScore(score); // Update global score in store
};

  return (
    <div className="main-menu">
      <img className="logo-ball" src={LogoBall} />
      <img className="wordmark" src={Wordmark} />
      <Navbar />
      <div className="main-menu-button" onClick={() => setIsInGame(true)}>
        Play
      </div>

      {!isSettings ? (
        <div className="main-menu-button" onClick={() => setIsSettings(true)}>
          Settings
        </div>
      ) : (
        <>
          <div className="main-menu-section-title">Mode</div>
          <div className="main-menu-selection-area">
            <div
              className={`main-menu-selection ${
                mode === "random" ? "main-menu-selected" : ""
              }`}
              onClick={() => setMode("random")}
            >
              Random
            </div>
            <div
              className={`main-menu-selection ${
                mode === "tour" ? "main-menu-selected" : ""
              }`}
              onClick={() => setMode("tour")}
            >
              Tour
            </div>
            <div
              className={`main-menu-selection ${
                mode === "adventure" ? "main-menu-selected" : ""
              }`}
              onClick={() => setMode("adventure")}
            >
              Adventure
            </div>
          </div>

          {mode === "random" && (
            <>
              <div className="main-menu-section-title">Difficulty</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 1 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(1)}
                >
                  Easy
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 3 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(3)}
                >
                  Medium
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 5 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(5)}
                >
                  Hard
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 10 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(10)}
                >
                  Evil
                </div>
              </div>

              <div className="main-menu-section-title">Number of Blocks</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 5 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(5)}
                >
                  5
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 10 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(10)}
                >
                  10
                </div>

                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 15 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(15)}
                >
                  15
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 20 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(20)}
                >
                  20
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 30 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(30)}
                >
                  30
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 40 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(40)}
                >
                  40
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 50 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(50)}
                >
                  50
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 100 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleBlocksCountChange(100)}
                >
                  100
                </div>
              </div>
            </>
          )}

          {mode === "tour" && (
            <>
              <div className="main-menu-section-title">Difficulty</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 1 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(1)}
                >
                  Easy
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 3 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(3)}
                >
                  Medium
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 5 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(5)}
                >
                  Hard
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 10 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => handleDifficultyChange(10)}
                >
                  Evil
                </div>
              </div>

              <div className="main-menu-section-title">Beach</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    level === "copacabana" ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setLevel("copacabana");
                    setLocalStorage("level", "copacabana");
                  }}
                >
                  Copacabana
                </div>
                <div
                  className={`main-menu-selection ${
                    level === "santamonica" ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setLevel("santamonica");
                    setLocalStorage("level", "santamonica");
                  }}
                >
                  Santa Monica
                </div>
              </div>
              <div className="coming-soon">More beaches coming soon!</div>
            </>
          )}

          {mode === "adventure" && (
            <div className="coming-soon">Coming soon!</div>
          )}
        </>
      )}

      <div className="main-menu-about-section">
        <div className="main-menu-about">
          <a href="https://github.com/Gryffindors-Private-Limited">
            © 2024 Gryffindors
          </a>
        </div>
      </div>
      <a href="https://github.com/Gryffindors-Private-Limited" target="_blank">
        <img
          className="author-logo"
          src={gryLogo}
          alt="Author's logo"
        ></img>
      </a>
    </div>
  );
}
