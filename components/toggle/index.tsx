import React, { useState } from 'react';

export default function Toggle() {
  const [state, setState] = useState(false);
  return (
    <button
      onClick={() => {
        setState(previousState => !previousState);
      }}
      id='toggle'
    >
      {state === true ? 'Turn off' : 'Turn on'}
    </button>
  );
}