
import { useState, useEffect } from 'react';



const useTypewriter = (text, speed = 190) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let direction = 1; // 1 para escribir, -1 para borrar
    const typingInterval = setInterval(() => {
      if (direction === 1) {
        if (i <= text.length) {
          setDisplayText(text.substring(0, i));
          i++;
        } else {
          direction = -1;
        }
      } else {
        if (i >= 0) {
          setDisplayText(text.substring(0, i));
          i--;
        } else {
          direction = 1;
        }
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};



const Typewriter = ({ text, speed, _class }) => {
  const displayText = useTypewriter(text, speed);

  return <p className={_class}>{displayText}</p>;
};

export default Typewriter;
