import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click To Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      {editMode ? (
        <input
          ref={nodeRef}
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <p onDoubleClick={(e) => setEditMode(true)} ref={nodeRef}>
          {val}
        </p>
      )}
    </Draggable>
  );
};

export default Text;
