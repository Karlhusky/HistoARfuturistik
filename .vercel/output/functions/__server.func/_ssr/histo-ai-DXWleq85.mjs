import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/histo-ai-DXWleq85.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM_PROMPT = `
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
var CLASSIFIER_PROMPT = `
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
var askHistoAI_createServerFn_handler = createServerRpc({
	id: "bf3044906b458a1018dcfed1b9cfd31bcf6e07ed7c019bdc057b2abb9f369330",
	name: "askHistoAI",
	filename: "src/lib/histo-ai.ts"
}, (opts) => askHistoAI.__executeServer(opts));
var askHistoAI = createServerFn({ method: "POST" }).validator((data) => data).handler(askHistoAI_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.KIE_AI_API_KEY;
	if (!apiKey) throw new Error("KIE_AI_API_KEY is not set. Add it in your Vercel project's Environment Variables.");
	const model = "gemini-2.5-flash";
	const classifierResponse = await fetch(`https://api.kie.ai/${model}/v1/chat/completions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			messages: [{
				role: "system",
				content: CLASSIFIER_PROMPT
			}, {
				role: "user",
				content: data.message
			}],
			temperature: .2,
			stream: false
		})
	});
	if (!classifierResponse.ok) throw new Error("Classifier failed.");
	if ((await classifierResponse.json()).choices?.[0]?.message?.content?.trim()?.toUpperCase() !== "RELATED") return { text: "Maaf, saya hanya dapat membantu mengenai materi Kehidupan Praaksara Indonesia dan Sejarah Indonesia Kelas X di HistoAR." };
	const response = await fetch(`https://api.kie.ai/${model}/v1/chat/completions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			messages: [
				{
					role: "system",
					content: SYSTEM_PROMPT
				},
				...data.history ?? [],
				{
					role: "user",
					content: data.message
				}
			],
			stream: false
		})
	});
	if (!response.ok) {
		const errText = await response.text();
		console.error("Kie AI error:", response.status, errText);
		throw new Error("HistoAI is having trouble responding right now.");
	}
	return { text: (await response.json()).choices?.[0]?.message?.content || "Sorry, I couldn't come up with an answer for that." };
});
//#endregion
export { askHistoAI_createServerFn_handler };
