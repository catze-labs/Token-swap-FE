import React from "react";

const TestHeader: React.FC = () => {
  return (
    <header>
      <h1 className="text-2xl font-bold">Hello World!</h1>
    </header>
  );
};
export default React.memo(TestHeader);
