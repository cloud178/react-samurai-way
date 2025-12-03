export type GetTrackDetailsOutputData = {
  id: string
  attributes: {
    title: string
    lyrics: string | null
  }
}

export type GetTrackDetailsOutput = {
  data: GetTrackDetailsOutputData
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if (!apiKey) return undefined
  return {
    'api-key': apiKey,
  }
}

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json())

  return promise
}

type TrackAttachment = {
  url: string
}

type TrackListItemAttributes = {
  title: string
  attachments: Array<TrackAttachment>
}

export type TrackListItemOutput = {
  id: string
  attributes: TrackListItemAttributes
}

export type GetTrackListOutputData = {
  data: Array<TrackListItemOutput>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutputData> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: prepareHeaders(),
  }).then((res) => res.json())

  return promise
}
