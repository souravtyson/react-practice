import React, { useState, useCallback } from 'react';
import Button from './Button';
import Title from './Title';
import Count from './Count';

const ParentComponent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(5000);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <div>
      <Title />
      <Count txt="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count txt="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
