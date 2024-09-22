import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

function AudioTranscriber() {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [result, setResult] = useState("");
  const [filename, setFilename] = useState("");

  const handleSubmit = () => {
    setIsDataLoading(true);
    fetch("http://localhost:8080/server.mjs", {
      method: "POST",
      body: JSON.stringify(filename),
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res.data);
        setIsDataLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <label className="block mb-5 font-medium text-gray-900" htmlFor="fip">
          Input audio filepath here:
        </label>
        <input
          className="w-96 block mb-5 p-2 text-white rounded-lg bg-blue-400 focus:outline-none"
          id="fip"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
        <button
          className="block mb-16 bg-blue-400 text-white w-40 p-1 rounded-lg"
          onClick={handleSubmit}
        >
          Transcribe
        </button>
      </div>

      {isDataLoading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <p className="">{result}</p>
      )}
    </div>
  );
}

export default AudioTranscriber;
