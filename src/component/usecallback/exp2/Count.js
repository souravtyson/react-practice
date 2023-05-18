import React from 'react';

const Count = ({ txt, count }) => {
  console.log(`rendered count ${txt} component `);
  return (
    <p>
      {txt} : {count}
    </p>
  );
};

export default React.memo(Count);
