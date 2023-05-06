import React from "react";

const Tree = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((e) => (
          <li key={e.name}>
            {e.name}
            {e.children && <Tree data={e.children} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
