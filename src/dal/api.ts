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

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: {
        // 'api-key': '1407b84b-67d8-4492-9fb5-0df5987df6a2',
      },
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
    headers: {
      // 'api-key': '1407b84b-67d8-4492-9fb5-0df5987df6a2',
    },
  }).then((res) => res.json())

  return promise
}
