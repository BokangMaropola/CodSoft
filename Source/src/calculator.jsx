import { useState, useEffect } from "react";
import React from "react";
import CalculatorBody from "./Components/CalculatorBody";

function Calculator() {
  const [entry, setEntry] = useState("");
  const [answer, setAnswer] = useState();
  const [history, setHistory] = useState();
  const [currentSign, setCurrentSign] = useState("");
  const [openpoint, setOpenPoint] = useState(0);

  useEffect(() => {
    if (
      answer !== undefined &&
      parseFloat(answer.toFixed(5)) !== parseFloat(answer)
    ) {
      setAnswer(parseFloat(answer.toFixed(5)));
    }
  }, [answer]);

  const number = [1, 2, 3, 4, 5, 6, 7, 9, 8, 9, 0];
  const modifier = [".", "%"];
  const sign = ["+", "-", "*", "/"];
  let calcthis = 0;

  const handleClick = (event) => {
    const id = event.target.id;

    if (id === "=" && openpoint !== 1) {
      if (entry !== "" && history !== undefined) {
        console.log("pre-switch test currentSign is " + currentSign);
        switch (currentSign) {
          case "+":
            calcthis = history + parseFloat(entry);
            if (calcthis == !NaN && calcthis == !Infinity) {
              console.log("did do mathing");
            }
            break;
          case "-":
            calcthis = history - parseFloat(entry);
            if (calcthis == !NaN && calcthis == !Infinity) {
              console.log("did do mathing");
            }
            break;
          case "*":
            calcthis = history * parseFloat(entry);
            if (calcthis == !NaN && calcthis == !Infinity) {
              console.log("did do mathing");
            }
            break;
          case "/":
            calcthis = history / parseFloat(entry);
            if (calcthis == !NaN && calcthis == !Infinity) {
              console.log("did do mathing");
            }
            break;
          default:
            console.log("not mathing");
            break;
        }
        setAnswer(calcthis);
        setEntry("");
        setHistory();
        setOpenPoint(0);
        setCurrentSign("");
        console.log("calculated answer is " + calcthis);
      }
    } else if (id === "C" || id === "CE") {
      if (id === "CE") {
        setHistory();
        setEntry("");
        setAnswer();
        setCurrentSign("");
        console.log("fully cleared");
        setOpenPoint(0);
      } else {
        setEntry("");
        setOpenPoint(0);
        console.log("partially cleared");
      }
      console.log("pressed " + id);
    } else if (sign.includes(id) && openpoint !== 1) {
      switch (id) {
        case "+":
          if (entry !== "") {
            setCurrentSign("+");
            setOpenPoint(0);
            setHistory(parseFloat(entry));
            setEntry("");
            console.log("currentSign is " + currentSign);
          } else if (answer !== undefined) {
            setCurrentSign("+");
            setOpenPoint(0);
            setHistory(parseFloat(answer.toFixed(5)));
            setAnswer();
            setEntry("");
            console.log("currentSign is " + currentSign);
          }
          break;
        case "-":
          if (entry !== "") {
            setCurrentSign("-");
            setOpenPoint(0);
            setHistory(parseFloat(entry));
            setEntry("");
            console.log("currentSign is " + currentSign);
          } else if (answer !== undefined) {
            setCurrentSign("-");
            setOpenPoint(0);
            setHistory(parseFloat(answer.toFixed(5)));
            setAnswer();
            setEntry("");
            console.log("currentSign is " + currentSign);
          }
          break;
        case "*":
          if (entry !== "") {
            setCurrentSign("*");
            setOpenPoint(0);
            setHistory(parseFloat(entry));
            setEntry("");
            console.log("currentSign is " + currentSign);
          } else if (answer !== undefined) {
            setCurrentSign("*");
            setOpenPoint(0);
            setHistory(parseFloat(answer.toFixed(5)));
            setAnswer();
            setEntry("");
            console.log("currentSign is " + currentSign);
          }
          break;
        case "/":
          if (entry !== "") {
            setCurrentSign("/");
            setOpenPoint(0);
            setHistory(parseFloat(entry));
            setEntry("");
            console.log("currentSign is " + currentSign);
          } else if (answer !== undefined) {
            setCurrentSign("/");
            setOpenPoint(0);
            setHistory(parseFloat(answer.toFixed(5)));
            setAnswer();
            setEntry("");
            console.log("currentSign is " + currentSign);
          }
          break;
        default:
          console.log("invalid pressed");
          break;
      }
      console.log("pressed " + id);
    } else if (modifier.includes(id)) {
      switch (id) {
        case ".":
          if (openpoint === 1) {
            console.log("recognized openpoint");
            setEntry(entry.slice(0, -1));
            setOpenPoint(0);
            console.log("unpressed " + id + { entry });
          } else if (entry !== "" && openpoint === 0) {
            setEntry(entry + id);
            setOpenPoint(1);
            console.log("pressed " + id);
          } else if (entry === undefined && openpoint === 0) {
            setEntry(0 + id);
            setOpenPoint(1);
            console.log("pressed " + id);
          }
          break;
        case "%":
          if (
            (entry !== "" && openpoint !== 1) ||
            (history !== undefined && openpoint !== 1)
          ) {
            if (entry !== "" && history !== undefined) {
              switch (currentSign) {
                case "+":
                  calcthis = history + history * (parseFloat(entry) / 100);
                  if (calcthis == !NaN && calcthis == !Infinity) {
                    console.log("did do mathing");
                  }
                  break;
                case "-":
                  calcthis = history - history * (parseFloat(entry) / 100);
                  if (calcthis == !NaN && calcthis == !Infinity) {
                    console.log("did do mathing");
                  }
                  break;
                case "*":
                  calcthis = history * (parseFloat(entry) / 100);
                  if (calcthis == !NaN && calcthis == !Infinity) {
                    console.log("did do mathing");
                  }
                  break;
                case "/":
                  calcthis = history / (parseFloat(entry) / 100);
                  if (calcthis == !NaN && calcthis == !Infinity) {
                    console.log("did do mathing");
                  }
                  break;
                default:
                  console.log("not percentaging");
                  break;
              }
              setAnswer(calcthis);
              setEntry("");
              setOpenPoint(0);
              setHistory();
              setCurrentSign("");
              console.log("calculated answer is " + calcthis);
            } else {
              calcthis = parseFloat(entry) / 100;
              if (calcthis == !NaN && calcthis == !Infinity) {
                console.log("did do mathing");
              }
              setAnswer(calcthis);
              setEntry("");
              setOpenPoint(0);
              setHistory();
              setCurrentSign("");
              console.log("calculated answer is " + calcthis);
            }
          } else {
            setAnswer(0);
          }
        default:
          console.log("invalid pressed");
          break;
      }
    } else if (number.includes(parseInt(id))) {
      if (entry == "0" && id == "0") {
        console.log(
          "point > " + openpoint + " ||  0 = no, 1 = yes, 2 = yes, but old"
        );
        console.log("inert pressed " + id);
      } else if (entry == "" || entry == "0") {
        setAnswer();
        setEntry(id);
        console.log("pressed " + id);
      } else {
        setEntry(entry + id);
        if (openpoint === 1) {
          setOpenPoint(2);
          setAnswer();
        }
        console.log("pressed " + id);
      }
    } else {
      console.log("pressed " + id);
    }
  };

  return (
    <CalculatorBody
      entry={entry}
      answer={answer}
      history={history}
      currentSign={currentSign}
      handleClick={handleClick}
    />
  );
}

export default Calculator;
