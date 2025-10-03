import { useState, useEffect } from "react"
import MusicInList from "./MusicInList"

export default function MusicList() {
  const [musiclist, setMusicList] = useState([])

  const fetchMusicList = async () => {
    try {
      await window.electronAPI.sendToElectron("music-get")
      await window.electronAPI.receiveFromElectron("music-list", (event, arg) => {
        setMusicList(arg)
      })
    } catch (error) {
      console.log(`Erro ao obter a lista de musicas ${error}`)
    }
  }

  useEffect(() => {
    fetchMusicList()
  }, [])

  return (
    <div className="w-11/12">
      <h2 className="ml-5 text-white text-2xl">Music List</h2>
      {musiclist.length === 0 ? <p className="text-zinc-400">Vazio</p> : musiclist.map((music, index) => {
        return <MusicInList key={index} music={music} />
      })}
    </div>
  )
}