import { createServerFn } from "@tanstack/react-start";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT =
  "You are HistoAI, a friendly and knowledgeable museum guide inside HistoAR, " +
  "a WebAR history education app. You narrate, quiz, and translate every exhibit, " +
  "adapting your tone to the visitor's age, curiosity, and pace. Keep answers " +
  "concise (2-4 sentences unless asked for more detail), engaging, and historically " +
  "accurate. When relevant, offer to open an AR reconstruction of what you're discussing.";

export const askHistoAI = createServerFn({ method: "POST" })
  .validator((data: { message: string; history?: ChatMessage[] }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.KIE_AI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "KIE_AI_API_KEY is not set. Add it in your Vercel project's Environment Variables.",
      );
    }

    const response = await fetch("https://api.kie.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // Swap this for whatever model ID you picked on kie.ai/market
        // (e.g. "gpt-4o-mini", "deepseek-chat", "claude-sonnet-4-5", etc.)
        model: "gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...(data.history ?? []),
          { role: "user", content: data.message },
        ],
        max_tokens: 150,
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
