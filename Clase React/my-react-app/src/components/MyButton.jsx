import { useState } from "react";

function MyButton(props) {
    const [clickCount, setClickCount] = useState(0);
    function handleClick() {
      setClickCount(clickCount + 1);
    }
    return (
      <button onClick={handleClick}>
        {props.dato} {clickCount}
      </button>
    );
  }

  export default MyButton;