import React from "react";
import Square from "../Square/Square";

export default function Board() {
  return (
    <div>
      <div className="App">
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}
