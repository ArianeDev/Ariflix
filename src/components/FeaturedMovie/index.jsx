import React from 'react'
import './style.scss'

export function FeaturedMovie({item}){

	return(
		<section className="featured" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
			<div className='styleImgVertical'>
				<div className="styleImghorizontal">
					<h1>{item.title || item.name}</h1>
					<p>{item.overview}</p>
					<div className="buttons">
						<a href={`watch/${item.id}`} className='buttonWatch'>▶ Assistir</a>
						<a href="{`add/${item.id}`}" className='buttonMylist'>+ Minha informações</a>
					</div>
				</div> 
			</div>
		</section>
	)
}
