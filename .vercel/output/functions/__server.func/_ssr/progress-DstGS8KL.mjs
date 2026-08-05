//#region node_modules/.nitro/vite/services/ssr/assets/progress-DstGS8KL.js
var STORAGE_KEY = "histoar_progress";
function isBrowser() {
	return typeof window !== "undefined";
}
function getProgress() {
	if (!isBrowser()) return {
		completed: [],
		scores: {}
	};
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return {
			completed: [],
			scores: {}
		};
		const parsed = JSON.parse(raw);
		return {
			completed: Array.isArray(parsed.completed) ? parsed.completed : [],
			scores: parsed.scores && typeof parsed.scores === "object" ? parsed.scores : {}
		};
	} catch (err) {
		console.error("Gagal membaca progres:", err);
		return {
			completed: [],
			scores: {}
		};
	}
}
function saveProgress(progress) {
	if (!isBrowser()) return;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
	} catch (err) {
		console.error("Gagal menyimpan progres:", err);
	}
}
function markMateriComplete(materiId, score) {
	const progress = getProgress();
	if (!progress.completed.includes(materiId)) progress.completed.push(materiId);
	progress.scores[materiId] = score;
	saveProgress(progress);
	return progress;
}
function isMateriComplete(materiId) {
	return getProgress().completed.includes(materiId);
}
/**
* Materi ke-N terbuka jika materi ke-(N-1) sudah selesai.
* Materi pertama (urutan 1) selalu terbuka.
*/
function isMateriUnlocked(materiList, materiId) {
	return true;
}
//#endregion
export { markMateriComplete as i, isMateriComplete as n, isMateriUnlocked as r, getProgress as t };
