import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
// import { exportComponentAsJPEG } from "react-component-export-image";
import { toJpeg } from 'html-to-image';

const EditPage = () => {
  const [params] = useSearchParams();

  const [count, setCount] = useState(0);

  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  const handleExport = () => {
    if (memeRef.current) {
      toJpeg(memeRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "meme.jpeg";
          link.click();
        })
        .catch((error) => {
          console.error("Error exporting image:", error);
        });
    }
  };

  return (
    <div>
      <div ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} alt="image-link" width={"250px"} />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={handleExport}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
