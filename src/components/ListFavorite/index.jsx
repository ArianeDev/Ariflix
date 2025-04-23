import React, { useEffect, useState } from "react";

export function ListFavorite() {
    const [listFavorite, setlistFavorite] = useState(null);
    
    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista toda
            let list = await response.get_home();

            let randomChosen = Math.floor(Math.random() * (list[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            console.log(chosen)
            setlistFavorite(chosen)
        }

        loadAll();
    }, []);

    return(
        <>
        </>
    )
}