import { useState } from "react";
import AudioRecorder from "./AudioRecorder";
import AudioTranscriber from "./AudioTranscriber";
import classNames from "classnames";

function App() {
  const [fn, setFn] = useState(true);

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="mt-32 mb-16">
        <button
          className={classNames("w-80 p-3 rounded-l-lg", {
            "bg-blue-300": fn,
            "bg-blue-100": !fn,
          })}
          onClick={() => setFn(true)}
        >
          Recorder
        </button>
        <button
          className={classNames("w-80 p-3 rounded-r-lg", {
            "bg-blue-300": !fn,
            "bg-blue-100": fn,
          })}
          onClick={() => setFn(false)}
        >
          Transcriber
        </button>
      </div>
      {fn ? <AudioRecorder /> : <AudioTranscriber />}
    </div>
  );
}

export default App;
