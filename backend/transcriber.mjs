import { AssemblyAI } from "assemblyai";

export const transcriber = async (filename) => {
  const client = new AssemblyAI({
    apiKey: "", //add your key
  });

  const params = {
    audio: filename,
    speaker_labels: true,
  };

  const transcript = await client.transcripts.transcribe(params);

  if (transcript.status === "error") {
    return {
      status: false,
      data: "",
    };
  }

  return {
    status: true,
    data: transcript.text,
  };
};
