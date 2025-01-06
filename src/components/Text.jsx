import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click To Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      {editMode ? (
        <input ref={nodeRef}
          onDoubleClick={() => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1 onDoubleClick={() => setEditMode(true)} ref={nodeRef}>
          {val}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
