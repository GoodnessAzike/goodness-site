// Theme Songs. Links only: the site never embeds or hosts audio.
// Leave `song` or `url` as '' and the site shows a marked placeholder.
export type Song = { artist: string; song: string; url: string; note: string };
export type Stage = { stage: string; songs: Song[] };

export const themeSongs: Stage[] = [
  {
    stage: 'Childhood',
    songs: [
      { artist: 'ABBA', song: 'Chiquitita', url: 'https://open.spotify.com/track/762B4bOcXF7I2Y8UlKTyTy', note: '' }, // TODO: one-line note
    ],
  },
  {
    stage: 'Teenage years',
    songs: [
      { artist: 'Lorde', song: 'Royals', url: 'https://open.spotify.com/track/4SDWMFvYJKtK1QPhIOeZhd', note: '' }, // TODO: one-line note
    ],
  },
  {
    stage: 'Quiet favorites',
    songs: [
      { artist: 'Dido', song: 'Life for Rent', url: 'https://open.spotify.com/track/7nYS7mmZh0K8EbM8DBRwb9', note: '' }, // TODO: one-line note
      { artist: 'Dido', song: 'White Flag', url: 'https://open.spotify.com/track/6si71supnBUhddjR2FJc2L', note: '' }, // TODO: one-line note
      { artist: 'Dido', song: 'Thank You', url: '', note: '' }, // TODO: link + one-line note
    ],
  },
];
