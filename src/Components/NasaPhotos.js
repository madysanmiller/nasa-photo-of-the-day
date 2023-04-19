import React from "react";

import styled, { keyframes } from 'styled-components'

const PhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;`

const kf = keyframes`
0% {
    opacity: 0;
    max-width: 200%;
}
100% {
    opacity: 1;
    max-width: 60%;
}`

const StyledImg = styled.img`
    max-width: 60%;
    border-radius: 15px;
    animation: ${kf} 0.5s ease-in-out backwards;`


const dummyData = {
    date: "2023-04-19",
    explanation: "On some nights the sky is the best show in town.  On this night, auroras ruled the sky, and the geomagnetic storm that created this colorful sky show originated from an increasingly active Sun. Surprisingly, since the approaching solar CME the day before had missed the Earth, it was not expected that this storm would create auroras. In the foreground, two happily surprised aurora hunters contemplate the amazing and rapidly changing sky. Regardless of forecasts, though, auroras were reported in the night skies of Earth not only in the far north, but as far south as New Mexico, USA.  As captured in a wide-angle image above Saariselkä in northern Finnish Lapland, a bright aurora was visible with an unusually high degree of detail, range of colors, and breadth across the sky.  The vivid yellow, green, red and purple auroral colors are caused by oxygen and nitrogen atoms high in Earth's atmosphere reacting to incoming electrons. ",
    hdurl: "https://apod.nasa.gov/apod/image/2304/AuroraSnow_Casado_3000.jpg ",
    title: "Auroral Storm over Lapland "
}

const NasaPhotos = (props) => {
    return (
        <PhotoWrapper>
{/* <div className="nasa-photo-wrapper"> */}
    <h3>{props.photo.title}</h3>
    <p>{props.photo.date}</p>
    <StyledImg  src={props.photo.hdurl} />
    <p>{props.photo.explanation}</p>
{/* </div> */}
</PhotoWrapper>
    )
}

export default NasaPhotos;