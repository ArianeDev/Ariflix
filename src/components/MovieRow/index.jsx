import './style.scss';
import React, { useState } from 'react';
import { Card } from '../Card';
import { Modal } from '../Modal';

// import { MagicMotion }
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Lista os filmes de acordo com o título
export function MovieRow({title, items}){

	const [selectdMovie, setSelectdMovie] = useState(null); // modal
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

	// Modal
	const handleOpenModal = (items) => { setSelectdMovie(items) } // Abrir
	const handleCloseModal = () => { setSelectdMovie(null) } // Fechar

	return (
		<div className="movieRow">
			<h2>{title}</h2>
			<div className="left" onClick={handLeftArrow}>
				<NavigateBeforeIcon style={{fontSize: 50}} />
			</div>
			<div className="right" onClick={handRightArrow}>
				<NavigateNextIcon style={{fontSize: 50}} />
			</div>
			<Card items={items} scrollX={scrollX} onOpenModal={handleOpenModal}/>
			{selectdMovie && (<Modal movie={selectdMovie} onClose={handleCloseModal} />)}
		</div>
	);
}