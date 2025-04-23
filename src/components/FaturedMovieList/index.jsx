import React, { useEffect, useState } from "react";
import { FeaturedMovie } from "../FeaturedMovie";
import response from "../../services/api";

export function FeaturedMovieList() {
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
		const loadAll = async () => {
			// Pegando a lista toda
			let list = await response.get_home();

			// Pegando um aleatório
			let originals = list.filter(i => i.slug === 'originals');
			let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
			let chosen = originals[0].items.results[randomChosen];
			let chosenInfo = await response.get_movieInfo(chosen.id, 'tv')
			setFeaturedData(chosenInfo);
		}

		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if(window.scrollY > 10){
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		}

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		} 

	}, []);

    return(
            <>    
                {featuredData && 
                    <FeaturedMovie item={featuredData}/>
                }
            </>
        )
}