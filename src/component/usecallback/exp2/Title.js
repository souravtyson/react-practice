import React from 'react';

const Title = () => {
  console.log(`rendered Title component `);
  return <h1>useCallBack hook</h1>;
};

export default React.memo(Title);
