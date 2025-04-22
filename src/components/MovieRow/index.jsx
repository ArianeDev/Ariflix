import './style.scss';
import React, { useState } from 'react';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Lista os filmes de acordo com o título
export function MovieRow({title, items}){

	const [scrollX, setScrollX] = useState(0); // Para controlar a rolagem dos filmes

	const handLeftArrow = () => {
		let x = scrollX + Math.round(window.innerWidth / 2);
		if(x > 0){
			x = 0;
		}

		setScrollX(x);
	}
	const handRightArrow = () => {
		let x = scrollX - Math.round(window.innerWidth / 2);
		let listW = items.results.length * 300;

		if((window.innerWidth - listW) > x){
			x = (window.innerWidth - (listW - 170))
		}

		setScrollX(x);
	}

	return (
		<div className="movieRow">
			<h2>{title}</h2>
			<div className="left" onClick={handLeftArrow}>
				<NavigateBeforeIcon style={{fontSize: 50}} />
			</div>
			<div className="right" onClick={handRightArrow}>
				<NavigateNextIcon style={{fontSize: 50}} />
			</div>
			<div className="container">
				<div className="listRow" style={{
					marginLeft: scrollX,
					width: items.results.length * 300}}>
					{items.results.length > 0 && items.results.map((item, key) => (
						<div key={key} className="item">
							<img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt={item.original_title} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}