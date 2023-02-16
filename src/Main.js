import React from "react";
import './Style.css';
import MovieList from './MovieList';

const Main = () => {
    return (
        <>
            <h1 className="heading">List Of Top 5 Webseries In 2023</h1>
            <section className="movie">
                <div className="wrapper">
                    <ul className="movie-list">
                        <MovieList imageSrc="https://flixpatrol.com/runtime/cache/files/posters/h/w350/hhor25xh6tonjdw9nmzzdtz3j8n.webp" title="Your Place or Mine" link="https://www.netflix.com/in/title/81045831" />
                        <MovieList imageSrc="https://flixpatrol.com/runtime/cache/files/posters/v/w350/vdgr1ydrlfbu9wxtodpf3zchmv9.webp" title="Glass Onion" link="https://www.netflix.com/in/title/81458416" />
                        <MovieList imageSrc="https://flixpatrol.com/runtime/cache/files/posters/8/w350/8wuvhemhfh2zip6nwkwlhwsyrel.webp" title="Bloodshot" link="https://www.netflix.com/in/title/81171201" />
                        <MovieList imageSrc="https://flixpatrol.com/runtime/cache/files/posters/o/w350/obgwy00befez9n25wwvyuqddbao.webp" title="Nobody" link="https://www.primevideo.com/detail/Nobody/0G95ADTCDUUBN395110JQ06554" />
                        <MovieList imageSrc="https://flixpatrol.com/runtime/cache/files/posters/a/w350/apl0wfx61trvooxvc8erd5cbp8x.webp" title="Half Brothers" link="https://www.netflix.com/in/title/81350119" />
                    </ul>
                </div>
            </section>

        </>
    );

}
export default Main;