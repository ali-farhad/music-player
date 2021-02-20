import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../components/helper";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  timeUpdateHandler,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  //event Hanlder
  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHanlder = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHander = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      let targetSong = songs[(currentIndex + 1) % songs.length];
      setCurrentSong(targetSong);
      playAudio(isPlaying, audioRef);
    }

    if (direction === "skip-back") {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      let targetIndex = (currentIndex - 1) % songs.length;
      // let targetSong = songs[currentIndex - 1];
      if (targetIndex === -1) {
        let currentIndex = songs[songs.length - 1];
        setCurrentSong(currentIndex);
        playAudio(isPlaying, audioRef);

        return;
      }

      let targetSong = songs[(currentIndex - 1) % songs.length];
      setCurrentSong(targetSong);
      playAudio(isPlaying, audioRef);

      // setCurrentSong(targetSong);
    }
  };

  //state

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min="0"
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHanlder}
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHander("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHander("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
