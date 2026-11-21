// Scenario 2 diagram coordinates, shared by the Mission File page and the Home whiteboard.
// Every label matches public/diagrams/scenario-2.png.

export type Dir = 'right' | 'down' | 'left';
export type Arrow = { d: string; end: [number, number]; dir: Dir };
export type Box = { x: number; y: number; w: number; h: number };
export type Version = Box & { lines: string[] };

export interface Layout {
  key: string;
  viewBox: string;
  fs: { bold: number; mono: number; tag: number };
  outbound: Box & { tag: [number, number] };
  stripe: { x: number; y: number; s: number; text: [number, number, number] };
  account: Box & { tag: [number, number] };
  pay: Arrow & { label: [number, number] };
  lambda: { x: number; y: number; s: number; text: [number, number, number] };
  writes: (Arrow & { step: number; n: number; badge: [number, number]; text: string; anchor: 'start' | 'end' })[];
  bucketL: Box & { tag: [number, number] };
  versionsL: (Version & { step: number })[];
  pathL: [number, number];
  lifecycle: Box;
  lcArrows: Arrow[];
  bucketR: Box & { tag: [number, number] };
  versionsR: (Version & { deleted: boolean })[];
  pathR: [number, number];
}

export const PATH = 'raw/payments/2026-10-26.json';

export const wide: Layout = {
  key: 'wide',
  viewBox: '20 80 1200 585',
  fs: { bold: 16, mono: 12, tag: 12.5 },
  outbound: { x: 150, y: 95, w: 220, h: 117, tag: [164, 95] },
  stripe: { x: 234, y: 114, s: 52, text: [260, 186, 203] },
  account: { x: 30, y: 230, w: 1180, h: 420, tag: [46, 230] },
  pay: { d: 'M250 212 V406', end: [250, 410], dir: 'down', label: [238, 320] },
  lambda: { x: 234, y: 414, s: 52, text: [260, 486, 503] },
  writes: [
    { step: 2, n: 1, d: 'M260 512 V540 H462', end: [468, 540], dir: 'right', badge: [302, 528], text: 'write, 26 Oct', anchor: 'start' },
    { step: 3, n: 2, d: 'M288 440 H462', end: [468, 440], dir: 'right', badge: [300, 428], text: 'refunds, 27 Oct', anchor: 'start' },
    { step: 4, n: 3, d: 'M270 412 V340 H462', end: [468, 340], dir: 'right', badge: [300, 328], text: 'refunds, 28 Oct', anchor: 'start' },
  ],
  bucketL: { x: 430, y: 290, w: 270, h: 310, tag: [444, 290] },
  versionsL: [
    { step: 2, x: 470, y: 511, w: 190, h: 58, lines: ['version 1'] },
    { step: 3, x: 470, y: 411, w: 190, h: 58, lines: ['version 2'] },
    { step: 4, x: 470, y: 311, w: 190, h: 58, lines: ['version 3'] },
  ],
  pathL: [565, 586],
  lifecycle: { x: 720, y: 411, w: 150, h: 58 },
  lcArrows: [
    { d: 'M870 440 H922', end: [928, 440], dir: 'right' },
    { d: 'M795 469 V540 H922', end: [928, 540], dir: 'right' },
  ],
  bucketR: { x: 890, y: 290, w: 290, h: 310, tag: [904, 290] },
  versionsR: [
    { deleted: true, x: 930, y: 511, w: 210, h: 58, lines: ['version 1, deleted 27 Nov'] },
    { deleted: true, x: 930, y: 411, w: 210, h: 58, lines: ['version 2, deleted 28 Nov'] },
    { deleted: false, x: 930, y: 311, w: 210, h: 58, lines: ['version 3'] },
  ],
  pathR: [1035, 586],
};

export const tall: Layout = {
  key: 'tall',
  viewBox: '0 8 400 880',
  fs: { bold: 13, mono: 11.5, tag: 11 },
  outbound: { x: 100, y: 22, w: 200, h: 112, tag: [112, 22] },
  stripe: { x: 178, y: 36, s: 44, text: [200, 102, 120] },
  account: { x: 10, y: 152, w: 380, h: 726, tag: [22, 152] },
  pay: { d: 'M200 134 V216', end: [200, 220], dir: 'down', label: [190, 186] },
  lambda: { x: 178, y: 222, s: 44, text: [200, 286, 302] },
  writes: [
    { step: 2, n: 1, d: 'M200 310 V342 H80 V450', end: [80, 456], dir: 'down', badge: [34, 330], text: 'write, 26 Oct', anchor: 'start' },
    { step: 3, n: 2, d: 'M200 310 V450', end: [200, 456], dir: 'down', badge: [214, 392], text: 'refunds, 27 Oct', anchor: 'start' },
    { step: 4, n: 3, d: 'M200 310 V342 H345 V450', end: [345, 456], dir: 'down', badge: [262, 330], text: 'refunds, 28 Oct', anchor: 'start' },
  ],
  bucketL: { x: 20, y: 422, w: 360, h: 140, tag: [32, 422] },
  versionsL: [
    { step: 2, x: 25, y: 458, w: 110, h: 56, lines: ['version 1'] },
    { step: 3, x: 145, y: 458, w: 110, h: 56, lines: ['version 2'] },
    { step: 4, x: 265, y: 458, w: 110, h: 56, lines: ['version 3'] },
  ],
  pathL: [200, 544],
  lifecycle: { x: 115, y: 598, w: 170, h: 54 },
  lcArrows: [
    { d: 'M200 652 V728', end: [200, 734], dir: 'down' },
    { d: 'M150 652 V680 H80 V728', end: [80, 734], dir: 'down' },
  ],
  bucketR: { x: 20, y: 700, w: 360, h: 160, tag: [32, 700] },
  versionsR: [
    { deleted: true, x: 25, y: 736, w: 110, h: 66, lines: ['version 1,', 'deleted 27 Nov'] },
    { deleted: true, x: 145, y: 736, w: 110, h: 66, lines: ['version 2,', 'deleted 28 Nov'] },
    { deleted: false, x: 265, y: 736, w: 110, h: 66, lines: ['version 3'] },
  ],
  pathR: [200, 842],
};

// Arrowhead triangle at the end point of an arrow
export function head([x, y]: [number, number], dir: Dir) {
  const s = 7;
  if (dir === 'right') return `${x},${y} ${x - s * 1.5},${y - s} ${x - s * 1.5},${y + s}`;
  if (dir === 'left') return `${x},${y} ${x + s * 1.5},${y - s} ${x + s * 1.5},${y + s}`;
  return `${x},${y} ${x - s},${y - s * 1.5} ${x + s},${y - s * 1.5}`;
}
// Background width for a tag sitting on a dashed border
export const tagW = (text: string, fs: number) => text.length * fs * 0.66 + 14;

export const TITLE = 'Scenario 2';
export const SENTENCE = "You are asked to design a pipeline that pulls payments from Stripe's API into raw/payments/ in shop-data-lake, with a 3-day lookback window to pick up refunds.";
export const QUOTE = 'AWS: "To determine the number of days an object is noncurrent, Amazon S3 looks at when its successor was created."';
