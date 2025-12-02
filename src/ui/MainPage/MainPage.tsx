import { TracksList } from '../TracksList/TracksList.tsx'
import { TrackDetail } from '../TracksDetail/TrackDetail.tsx'
import { useTrackSelection } from '../../bll/UseTrackSelection.tsx'

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection()

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }
  return (
    <div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <h1>Musicfun Player</h1>
        <TracksList onTrackSelect={handleTrackSelect} selectedTrackId={trackId} />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  )
}
