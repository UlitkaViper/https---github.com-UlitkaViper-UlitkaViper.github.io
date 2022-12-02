import React from 'react';
import {LeftPosts} from './leftPosts'
import {RightPosts} from './rightPosts'


export function Main() {
  return (
    <div className="main">
      <>
      {LeftPosts()}
      </>
      <RightPosts/>
    </div>
  );
}

// export default App;
