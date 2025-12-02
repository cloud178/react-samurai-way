import { useTrackDetail } from '../../bll/UseTrackDetail.tsx'
import styles from './TrackDetail.module.css'

type Props = {
  trackId: string | null
}

export function TrackDetail({ trackId }: Props) {
  const { trackDetails } = useTrackDetail(trackId)

  return (
    <div className={styles.track}>
      <h2>Details</h2>
      {!trackId && 'Track is not selected'}
      {trackId && !trackDetails && <h3>loading...</h3>}
      {trackId && trackDetails && trackId !== trackDetails.id && <h3>loading...</h3>}
      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? 'no lyrics'}</p>
        </div>
      )}
    </div>
  )
}
