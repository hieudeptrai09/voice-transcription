import { AssemblyAI } from "assemblyai";

export const transcriber = async (filename) => {
  const client = new AssemblyAI({
    apiKey: "db870aac0c3941bc860cb392ac858691",
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
