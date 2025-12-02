// import { useEffect, useState } from 'react'
//
// export function App() {
//   const [selectedTrackId, setSelectedTrackId] = useState(null)
//   const [selectedTrack, setSelectedTrack] = useState(null)
//   const [tracks, setTracks] = useState(null)
//
//   useEffect(() => {
//     console.log('effect')
//
//     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
//       headers: {
//         'api-key': '1407b84b-67d8-4492-9fb5-0df5987df6a2',
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => setTracks(json.data))
//   }, [])
//
//   useEffect(() => {
//     if (!selectedTrackId) return
//
//     fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
//       headers: {
//         'api-key': '1407b84b-67d8-4492-9fb5-0df5987df6a2',
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => setSelectedTrack(json.data))
//   }, [selectedTrackId])
//
//   if (tracks === null) {
//     return (
//       <div>
//         <h1>Musicfun Player</h1>
//         <span>loading...</span>
//       </div>
//     )
//   }
//
//   if (tracks.length === 0) {
//     return (
//       <div>
//         <h1>Musicfun Player</h1>
//         <span>No tracks</span>
//       </div>
//     )
//   }
//
//   return (
//     <>
//       <div>
//         <h1>Musicfun Player</h1>
//         <button
//           onClick={() => {
//             setSelectedTrackId(null)
//             setSelectedTrack(null)
//           }}
//         >
//           reset selection
//         </button>
//         <div style={{ display: 'flex', gap: '30px' }}>
//           <ul>
//             {tracks.map((track) => (
//               <li key={track.id} style={{ border: track.id === selectedTrackId ? '2px solid orange' : 'none' }}>
//                 <div
//                   onClick={() => {
//                     setSelectedTrackId(track.id)
//                   }}
//                 >
//                   {track.attributes.title}
//                 </div>
//                 <audio src={track.attributes.attachments[0].url} controls></audio>
//               </li>
//             ))}
//           </ul>
//           <div>
//             <h2>Details</h2>
//             {!selectedTrackId && 'Track is not selected'}
//             {selectedTrackId && !selectedTrack && <h3>loading...</h3>}
//             {selectedTrackId && selectedTrack && selectedTrackId !== selectedTrack.id && <h3>loading...</h3>}
//             {selectedTrack && (
//               <div>
//                 <h3>{selectedTrack.attributes.title}</h3>
//                 <h4>lyrics</h4>
//                 <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
//----------------------------------------------
// import { useState } from 'react'

// export function App() {
//   console.log('🎨 App')
//   const [tracks] = useState([
//     { id: 1, title: 'Bruno Mars - Uptown Funk' },
//     { id: 2, title: 'Eminem - Lose Yourself' },
//     { id: 3, title: 'Rihanna - Diamonds' },
//   ])
//   const [selectedTrackId, setSelectedTrackId] = useState(1)
//
//   const selectedTrack = tracks.find((track) => track.id === selectedTrackId)
//
//   const jsx = (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//       <button
//         onClick={() => {
//           setSelectedTrackId(selectedTrackId + 1)
//         }}
//       >
//         Next
//       </button>
//       <hr />
//       <TracksList items={tracks} />
//       <hr />
//       <TrackDetail track={selectedTrack} />
//     </div>
//   )
//
//   return jsx
// }
//
// function TracksList(props) {
//   console.log('🛒 TracksList')
//   const jsx = (
//     <ul>
//       {props.items.map((track) => (
//         <TrackItem key={track.id} item={track} />
//       ))}
//     </ul>
//   )
//   return jsx
// }
//
// function TrackItem(props) {
//   console.log(`🧧 trackItem ${props.item.id}`)
//   const [counter, setCounter] = useState(0)
//   const jsx = (
//     <li>
//       {props.item.id} -{' '}
//       <b>
//         {props.item.title} -{' '}
//         <span
//           onClick={() => {
//             setCounter(counter + 1)
//           }}
//         >
//           likes
//         </span>
//         : {counter}
//       </b>
//     </li>
//   )
//   return jsx
// }
//
// function TrackDetail(props) {
//   console.log('🎟 TrackDetail')
//   if (!props.track) return <div>No track</div>
//   const jsx = (
//     <div>
//       <h3>{props.track.title}</h3>
//       <h4>id: {props.track.id}</h4>
//     </div>
//   )
//   return jsx
// }
