import { useEffect, useState } from "react";

export default function ModalPlayList() {
  const [musicPlaylist, setMusicPlayList] = useState([]);

  useEffect(() => {
    window.electronAPI.receiveFromElectron("music-playable", (event, music) => {
      setMusicPlayList([...musicPlaylist, music]);
    });
  }, [musicPlaylist]);

  return (
    <div
      id="modal-play-list"
      className="absolute flex flex-col right-0 bottom-0 bg-[#212124] w-80 h-auto border-solid mr-2 fixed z-10 sm:w-64 xs:w-48 sm:h-60 xs:h-48 overflow-y-auto"
    >
      <h1 className="text-center text-white">Playlist</h1>
      <div className="m-4 bg-[#171719] overflow-y-auto max-h-60">
        {musicPlaylist.length === 0 ? (
          <p className="text-zinc-400">Vazio</p>
        ) : (
          musicPlaylist.map((music, index) => {
            return <p className="text-white" key={index}>{music}</p>;
          })
        )}
      </div>
    </div>
  );
}
