import React from "react"
import './style.scss'

export function Card({items, scrollX, onOpenModal}){
	return(
		<div className="container">
				<div className="listRow" style={{
					marginLeft: scrollX,
					width: items.results.length * 300}}>
					{items.results.length > 0 && items.results.map((item, key) => (
						<div key={key} className="item">
							<img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt={item.original_title} onClick={() => onOpenModal(item)}/>
						</div>
					))}
				</div>
			</div>
	)
}