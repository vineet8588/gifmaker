import React, { useState, useEffect } from 'react';
import './App.css';

import {createFFmpeg,fetchFile} from '@ffmpeg/ffmpeg';
const ffmpeg = createFFmpeg({log: true});

function App() {

  const [ready,setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  }

  useEffect(() => {
    load();
  }, [])

  const convertToGif = async () =>{
    //Write file to ffmpeg wasm memory
    ffmpeg.FS('writeFile','test.mp4', await fetchFile(video));

    //Run the ffmpeg commands here
    await ffmpeg.run('-i','test.mp4','-f', 'gif', 'out.gif');

    //Read and access the out.mp4 file from ffmpeg wasm memory
    const data = ffmpeg.FS('readFile', 'out.gif');

    //creat a url of output object file
    const url = URL.createObjectURL(new Blob([data.buffer], {type: 'image/gif'}) )
    setGif(url); 

  }

  // Return the App component.
  return ready ? (
    <div className="App">
      <h1>GIF MAKER</h1>
      {video && <video 
                  controls
                  width="250"
                  src={URL.createObjectURL(video)}>
      
      </video>
      }
      <input style={{margin: 8}} type="file" onChange={(e)=>{setVideo(e.target.files?.item(0))}}/>
      
      <button className="convertBtn" onClick={convertToGif}> Convert </button>
      
      {gif && <> 
        <div style={{margin: 8}}>Result : </div>
        <img src={gif} width='250'/> 
        <a className="downloadBtn" href={gif} download> Download </a> 
      </>}
      
    </div>
  ):
  (<p>Loading...</p>)
}

export default App;
