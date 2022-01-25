import React, {useEffect} from 'react';
import styles from './Misuc.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getTracks} from "../../redux/reducers/music.reducer";
import {AppStateType} from "../../redux/store";
import Track from "./Track";
import {TrackType} from "../../types";

const Music: React.FC = () => {
  const tracks = useSelector((state: AppStateType) => state.music.tracks)

  // false array if tracks === null
  const initialTracks = [] as TrackType[];
  const formInitialTracks = (count: number) => {
    for (let i = 0; i < count; i++) {
      initialTracks.push({_id: null, comments: null, name: null, artist: null, picture: null, audio: null, time: null, listens: null});
    }
  }
  formInitialTracks(5);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTracks())
  }, [])

  return (
    <div className={styles.box}>
      <div className={styles.tracks}>
        {tracks && tracks.length ? tracks.map(track => <Track trackName={track.name} artist={track.artist} picture={track.picture} audio={track.audio} listens={track.listens} time={track.time}/>) :
                  initialTracks.map(track => <Track trackName={track.name} artist={track.artist} picture={track.picture} audio={track.audio} listens={track.listens} time={track.time}/>)}
      </div>
    </div>
  );
};

export default Music;
