import React, { useEffect, useState } from "react";
import response from '../../services/api';

export function ListFavorite() {
    const [listFavorite, setlistFavorite] = useState(null);
    
    useEffect(() => {
        const loadAll = async () => {
            let list = await response.get_home();
            const listMovie = []

            for(let i = 0; i < 3; i++){
                let randomChosen = Math.floor(Math.random() * (list[0].items.results.length - 1));
                let chosen = list[0].items.results[randomChosen];

                listMovie.push(chosen)
            }
            
            setlistFavorite(listMovie);
            console.log(listMovie)
        }

        loadAll();
    }, []);

    return(
        <>
            {listFavorite}
        </>
    )
}