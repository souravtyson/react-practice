import React, { useState, useEffect } from 'react';

const ExpInfiniteLoop = () => {
  const [views, setViews] = useState(0);
  const user = { name: 'Sourav', userViews: 5 };

  // useEffect({
  //   setViews()
  // }, [user]);

  return <p>The count is: {views}</p>;
};

export default ExpInfiniteLoop;
