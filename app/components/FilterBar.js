import React from "react";

function FilterBar({ setFilter }) {
  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        border: "1px solid black",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{ color: "black", cursor: "pointer" }}
        onClick={() => setFilter("all")}
      >
        All
      </p>
      <p
        style={{ color: "black", cursor: "pointer" }}
        onClick={() => setFilter("completed")}
      >
        Completed
      </p>
      <p
        style={{ color: "black", cursor: "pointer" }}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </p>
    </div>
  );
}
export default FilterBar;
