import React from 'react';
import Typed from 'typed.js';

export default function TypedTxt({stringsArray, textSize}) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: stringsArray,
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
      cursorChar: '_',
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="local-text-body"> 
      <div><span> $ npm start ...</span> </div>
      <div>
      <span> $ </span>
      <span ref={el} />
      </div>
    </div>
  );
}