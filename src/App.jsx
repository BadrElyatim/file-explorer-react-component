import Folder from "./components/Folder"
import File from "./components/File"

function App() {

  return (
    <>
      <Folder name={'Desktop'}>
        <File name={'file.txt'} />
        <Folder name={'Work'}>
          <File name={'song.mp3'} />
          <File name={'video.mp4'} />
        </Folder>
      </Folder>
    </>
  )
}

export default App
