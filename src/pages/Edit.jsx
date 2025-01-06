import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";

const EditPage = () => {
  const [params] = useSearchParams();

  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <img src={params.get("url")} alt="image-link" width={"250px"} />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={addText}>Save</Button>
    </div>
  );
};

export default EditPage;
