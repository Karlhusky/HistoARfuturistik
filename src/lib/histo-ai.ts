import { createServerFn } from "@tanstack/react-start";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `
You are HistoAI.

You ONLY answer questions related to:

- Kehidupan Praaksara Indonesia
- Periodisasi Geologi
- Manusia Purba Indonesia
- Artefak
- Fosil
- Kebudayaan Praaksara
- Sejarah Indonesia SMA Kelas X

Rules:

1. Never answer outside those topics.

2. If the question is outside those topics,
reply ONLY:

"Maaf, saya hanya dapat membantu mengenai materi Kehidupan Praaksara Indonesia dan Sejarah Indonesia Kelas X di HistoAR."

3. Never use outside knowledge.

4. Never guess.

5. Use Bahasa Indonesia.

6. Maximum 3 short paragraphs.

`;

const CLASSIFIER_PROMPT = `
You are a topic classifier.

Determine whether the user's question is related to ONE of these topics:

- Indonesian Prehistory
- Kehidupan Praaksara
- Periodisasi Geologi
- Manusia Purba Indonesia
- Artefak
- Fosil
- Kebudayaan Praaksara
- Sejarah Indonesia SMA Kelas X

Reply ONLY with one word:

RELATED

or

UNRELATED

Do not explain.
`;

export const askHistoAI = createServerFn({ method: "POST" })
  .validator((data: { message: string; history?: ChatMessage[] }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.KIE_AI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "KIE_AI_API_KEY is not set. Add it in your Vercel project's Environment Variables.",
      );
    }

    // Kie AI puts the model name in the URL path itself, not in the body
    const model = "gemini-2.5-flash";

// ==========================
// CLASSIFIER
// ==========================

const classifierResponse = await fetch(
  `https://api.kie.ai/${model}/v1/chat/completions`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      messages: [
        {
          role: "system",
          content: CLASSIFIER_PROMPT,
        },
        {
          role: "user",
          content: data.message,
        },
      ],
      temperature: 0.2,
      stream: false,
    }),
  }
);

if (!classifierResponse.ok) {
  throw new Error("Classifier failed.");
}

const classifierJson = await classifierResponse.json();

const intent =
  classifierJson.choices?.[0]?.message?.content
    ?.trim()
    ?.toUpperCase();

if (intent !== "RELATED") {
  return {
    text: "Maaf, saya hanya dapat membantu mengenai materi Kehidupan Praaksara Indonesia dan Sejarah Indonesia Kelas X di HistoAR.",
  };
}

    const response = await fetch(`https://api.kie.ai/${model}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...(data.history ?? []),
          { role: "user", content: data.message },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Kie AI error:", response.status, errText);
      throw new Error("HistoAI is having trouble responding right now.");
    }

    const json = (await response.json()) as {
      choices: Array<{ message: { content: string } }>;
    };

    const text = json.choices?.[0]?.message?.content;

    return { text: text || "Sorry, I couldn't come up with an answer for that." };
  });
