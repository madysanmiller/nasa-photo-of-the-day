import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhotos from './Components/NasaPhotos';
import styled from 'styled-components'

const AppDiv = styled.div`
  font-family: sans-serif;
  text-align: center;`

const dummyData = {
  date: "2023-04-19",
  explanation: "On some nights the sky is the best show in town.  On this night, auroras ruled the sky, and the geomagnetic storm that created this colorful sky show originated from an increasingly active Sun. Surprisingly, since the approaching solar CME the day before had missed the Earth, it was not expected that this storm would create auroras. In the foreground, two happily surprised aurora hunters contemplate the amazing and rapidly changing sky. Regardless of forecasts, though, auroras were reported in the night skies of Earth not only in the far north, but as far south as New Mexico, USA.  As captured in a wide-angle image above Saariselkä in northern Finnish Lapland, a bright aurora was visible with an unusually high degree of detail, range of colors, and breadth across the sky.  The vivid yellow, green, red and purple auroral colors are caused by oxygen and nitrogen atoms high in Earth's atmosphere reacting to incoming electrons. ",
  hdurl: "https://apod.nasa.gov/apod/image/2304/AuroraSnow_Casado_3000.jpg ",
  title: "Auroral Storm over Lapland "

}

function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  },[])
  return (
    <AppDiv>
    {/* // <div className="App"> */}
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <NasaPhotos photo={data} />
    </AppDiv>
  );
}


export default App;

