import React, { useEffect, useState } from "react";
import response from '../../services/api';
import { MovieRow }  from "../../components/MovieRow";
import { FeaturedMovie } from "../../components/FeaturedMovie";
import { Header } from "../../components/Header";
import './style.scss'

export function Main(){
	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false); //verificar se o menu vai ficar preto

	useEffect(() => {
		const loadAll = async () => {
			// Pegando a lista toda
			let list = await response.get_home();
			setMovieList(list);

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
		<div className="page">
			<Header black={blackHeader} />
			{featuredData && 
				<FeaturedMovie item={featuredData}/>
			}
			<section className="lists">
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items}/>
				))}
			</section>

			{movieList.length <= 0 &&
				<div className="loading">
					<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNpdTA5ZHE4em55eHJhaGVzaGxnbnoyMm5rYjM5eHhnN2JlNjRyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.gif" alt="" />
				</div>
			}
		</div>
	)
}

