// Theme Songs. Links only: the site never embeds or hosts audio.
// Leave `song` or `url` as '' and the site shows a marked placeholder.
export type Song = { artist: string; song: string; url: string; note: string };
export type Stage = { stage: string; songs: Song[] };

export const themeSongs: Stage[] = [
  {
    stage: 'Childhood',
    songs: [
      { artist: 'ABBA', song: '', url: '', note: '' }, // TODO: choose the song, add a Spotify or YouTube link
    ],
  },
  {
    stage: 'Teenage years',
    songs: [
      { artist: 'Lorde', song: '', url: '', note: '' }, // TODO: choose the song, add a Spotify or YouTube link
    ],
  },
  {
    stage: 'Quiet favorites',
    songs: [
      { artist: 'Dido', song: 'Life for Rent', url: '', note: '' }, // TODO: link + one-line note
      { artist: 'Dido', song: 'White Flag', url: '', note: '' }, // TODO: link + one-line note
      { artist: 'Dido', song: 'Thank You', url: '', note: '' }, // TODO: link + one-line note
    ],
  },
];
