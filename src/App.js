import React from "react";
import "./App.css";
import ReactImageAnnotate from "react-image-annotate";
function App() {
  return (
    <div className="App">
      <ReactImageAnnotate
        selectedImage="https://homepages.cae.wisc.edu/~ece533/images/barbara.png"
        taskDescription="# Draw region around each face\n\nInclude chin and hair."
        images={[
          {
            src: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
            name: "Image 1"
          }
        ]}
        regionClsList={["Man Face", "Woman Face"]}
      />
    </div>
  );
}

export default App;
