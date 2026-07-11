// Tipe data untuk konten Histoar — materi, quiz, dan konfigurasi AR.
// Struktur mengikuti data/materi.json, data/quiz.json, data/ar.json.

export interface MateriKonten {
  judul: string;
  isi: string;
}

export interface Materi {
  id: string;
  urutan: number;
  kode: string;
  layerColor: string;
  judul: string;
  ringkasan: string;
  konten: MateriKonten[];
}

export interface MateriData {
  materi: Materi[];
}

export interface QuizQuestion {
  id: string;
  pertanyaan: string;
  opsi: string[];
  jawaban: number;
}

export interface QuizData {
  quiz: Record<string, QuizQuestion[]>;
}

export interface ArHotspot {
  id: string;
  label: string;
  model: string;
  scale?: string;
  audio?: string;
  teks: string;
  view?: { rotY?: number; zoom?: number };
}

export interface ArTarget {
  key: string;
  label: string;
  targetIndex: number;
  model: string;
  scale?: string;
  defaultView?: { rotY?: number; zoom?: number };
  introAudio?: string;
  hotspots: ArHotspot[];
  _locked?: boolean;
}

export interface ArMateriConfig {
  targetMind: string;
  maxZoom?: number;
  targets: ArTarget[];
}

export type ArData = Record<string, ArMateriConfig>;

export interface ChatMessage {
  role: "user" | "bot";
  text: string;
}
