import React, { useState } from 'react';
function Eightball(props) {
  // const initialMsg = props.msg;
  const [color, setColor] = useState(props.color);
  const [msg, setMsg] = useState(props.msg);
  const [redCount, setRedCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);

  function incrementColor(color) {
    if (color === 'goldenrod') {
      setYellowCount(yellowCount + 1);
    }
    else if (color === 'red') {
      setRedCount(redCount + 1);
    }
    else if (color === 'green') {
      setGreenCount(greenCount + 1);
    }
  }

  function handleClick() {
    let randomIndex = Math.floor(Math.random() * props.answers.length)
    let newColor = props.answers[randomIndex].color;
    setColor(newColor);
    setMsg(props.answers[randomIndex].msg);
    incrementColor(newColor)
  }

  function resetEightball() {
    setColor(props.color);
    setMsg(props.msg);
  }

    return (
      <div>
        <div className="Eightball" onClick={handleClick} style={{backgroundColor: color}}>
          <b>{msg}</b>
        </div>
        <button onClick={resetEightball}>RESET</button><br />
        
        <ul>
          COUNTS:
          <li>red - {redCount}</li>
          <li>yellow - {yellowCount}</li>
          <li>green - {greenCount}</li>
        </ul>
      </div>
    )
}
Eightball.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}
export default Eightball;