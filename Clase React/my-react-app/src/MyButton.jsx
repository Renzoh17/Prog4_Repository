import { useState } from "react";

function MyButton(dato) {
    const [clickCount, setClickCount] = useState(0);
    function handleClick() {
      setClickCount(clickCount + 1);
    }
    return (
      <button onClick={handleClick}>
        {dato.dato} {clickCount}
      </button>
    );
  }

  export default MyButton;