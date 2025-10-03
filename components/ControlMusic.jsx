import { useEffect, useRef, useState } from "react";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PreviousIcon from "./icons/PreviousIcon";
import { formatTime } from "@/util/formatTime";

export default function ControlMusic() {
  const [musicPlaylist, setMusicPlayList] = useState([]);
  const [audio, setAudio] = useState(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.electronAPI.receiveFromElectron(
      "music-playable",
      async (event, music) => {
        setMusicPlayList((prevPlaylist) => [...prevPlaylist, music]);
      }
    );
  }, []);

  useEffect(() => {
    if (musicPlaylist.length > 0) {
      const currentMusic = `/musicas/${musicPlaylist[musicIndex]}`;
      setAudio(currentMusic);
    }
  }, [musicPlaylist, musicIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", () => {});
      }
    };
  }, [audio]);

  useEffect(() => {
    if (audioRef.current) {
      const interval = setInterval(() => {
        if (!audioRef.current.paused) {
          const time = audioRef.current.currentTime;
          setCurrentTime(time);

          const progressBar = audioRef.current;
          const progressBarWidth = (time / duration) * 100;
          progressBar.style.setProperty('--progress', `${progressBarWidth}%`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [audioRef.current, isPlaying, duration]);

  function handleMusicEnd() {
    setMusicIndex((prevIndex) => (prevIndex + 1) % musicPlaylist.length);
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [audio]);

  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function handlePause() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function handleNext() {
    setMusicIndex((prevIndex) => (prevIndex + 1) % musicPlaylist.length);
  }

  function handlePrevious() {
    setMusicIndex((prevIndex) =>
      prevIndex === 0 ? musicPlaylist.length - 1 : prevIndex - 1
    );
  }

  function handleProgressBarClick(event) {
    if (audioRef.current) {
      const progressBar = event.currentTarget;
      const clickPosition = event.nativeEvent.offsetX;
      const totalWidth = progressBar.clientWidth;

      const percentage = clickPosition / totalWidth;

      if (audioRef.current.duration && isFinite(audioRef.current.duration)) {
        const time = audioRef.current.duration * percentage;
        audioRef.current.currentTime = time;
      }
    }
  }

  return (
    <div className="w-96 h-14 px-8 flex-col justify-center items-center gap-4 inline-flex">
      <div className="justify-center items-center gap-8 inline-flex">
        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="w-4 h-4 relative">
            <PreviousIcon onClick={handlePrevious} />
          </div>
        </div>

        <div
          id="play"
          className={
            isPlaying
              ? "hidden"
              : "flex w-4 h-4 justify-start items-start gap-2.5"
          }
        >
          <div className="w-4 h-4 relative">
            <PlayIcon onClick={handlePlay} />
          </div>
        </div>

        <div
          id="pause"
          className={
            isPlaying
              ? "flex"
              : "hidden w-4 h-4 justify-start items-start gap-2.5"
          }
        >
          <div className="w-4 h-4 relative">
            <PauseIcon onClick={handlePause} />
          </div>
        </div>

        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="w-4 h-4 relative">
            <NextIcon onClick={handleNext} />
          </div>
        </div>
      </div>

      <div className="self-stretch justify-start items-center gap-8 inline-flex">
        <div className="text-center text-xs text-white font-semibold leading-tight tracking-wide">
          <p>{audioRef.current ? formatTime(currentTime) : "00:00"}</p>
        </div>
        <div
          className="w-96 h-1 relative bg-neutral-600 rounded-full"
          onClick={handleProgressBarClick}
        >
          <div
            id="progress-bar"
            className="w-1 h-1 rounded-full bg-white absolute top-1/2 transform -translate-y-1/2"
            style={{
              left: `${(audioRef.current && audioRef.current.currentTime / duration) * 100}%`,
              transition: "left 0.1s ease",
            }}
          />
        </div>

        <div className="text-center text-xs text-white font-semibold leading-tight tracking-wide">
          <p>{audioRef.current ? formatTime(duration) : "00:00"}</p>
        </div>
      </div>

      <audio
        ref={audioRef}
        key={audio}
        src={audio}
        onEnded={handleMusicEnd}
      />
    </div>
  );
}
