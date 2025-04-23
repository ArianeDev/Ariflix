import React, { useState, useEffect } from "react";
import { MovieRow } from "../MovieRow";
import response from '../../services/api';
import { FeaturedMovieList } from "../FaturedMovieList";

export function Conteudo({type}) {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
            const loadAll = async () => {
                
                if (type === "movies") {
                    let movie = await response.get_movie();
                    setMovieList(movie);
                } else if (type === "series") {
                    let series = await response.get_series();
                    console.log(series);
                    setMovieList(series);
                } else {
                    // Pegando a lista toda
                    let list = await response.get_home();
                    setMovieList(list);
                }
            }
    
            loadAll();
        }, [type]); // mudei isso aqui

    return (
        <>
            <FeaturedMovieList />
            
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNpdTA5ZHE4em55eHJhaGVzaGxnbnoyMm5rYjM5eHhnN2JlNjRyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.gif" alt="" />
                </div>
            }
        </>
    )   
}