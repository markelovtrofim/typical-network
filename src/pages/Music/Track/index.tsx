import React from 'react';
import styles from "./Track.module.css";
import {IconButton, Skeleton} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface TrackItemConditionType {
  payload: any,
  variant: "text" | "circular" | "rectangular",
  width: number,
  height: number,
  children: React.ReactNode
}

const TrackItemCondition: React.FC<TrackItemConditionType> = ({payload, variant, width, height, children}) => {
  return <>{payload || payload === 0 ? children : <Skeleton variant={variant} width={width} height={height} className={styles.skeleton}/>}</>
}


interface TrackPropsType  {
  trackName: string | null
  artist: string | null
  picture: string | null
  audio: string | null
  listens: number | null
  time: number | null
}

const Track: React.FC<TrackPropsType> = ({trackName, artist, picture, audio, listens, time}) => {
  console.log(time)
  const countTrackTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - minutes * 60;
    if (seconds < 10) return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  const collectListensString = (listens: number) => {
    return String(listens).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  };

  return (
    <div className={styles.track}>
      <div className={styles.track_left}>

        {/* play */}
        <div className={styles.play_icon_box}>
          <IconButton>
            <PlayArrowIcon className={styles.play_icon}/>
          </IconButton>
        </div>

        {/* image */}
        <div className={styles.track_icon_box}>
          <TrackItemCondition payload={picture} variant={"rectangular"} height={35} width={35}><img height={35} width={35} src={`http://localhost:5000/${picture}`} alt=""/></TrackItemCondition>
        </div>

        {/* name, artist */}
        <div className={styles.info}>
          <div className={styles.track_name}><TrackItemCondition payload={trackName} variant={"text"} height={16} width={170}>{trackName}</TrackItemCondition></div>
          <div className={styles.artist_name}><TrackItemCondition payload={artist} variant={"text"} height={15} width={145}>{artist}</TrackItemCondition></div>
        </div>
      </div>


      <div className={styles.track_right}>
        {/*listens*/}
        <div className={styles.track_listens}>
          <TrackItemCondition payload={listens} variant={"text"} height={16} width={50}>{collectListensString(
            // @ts-ignore
            listens)}</TrackItemCondition>
        </div>

        {/* time */}
        <div className={styles.track_time}>
          <TrackItemCondition payload={time} variant={"text"} height={16} width={30}>{countTrackTime(
            // @ts-ignore
            time)}</TrackItemCondition>
        </div>
      </div>
    </div>
  );
};

export default Track;