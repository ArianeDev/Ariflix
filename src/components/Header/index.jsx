import React from "react";
import './style.scss'

export function Header({black}){
	return(
		<header className={black ? 'black' : ''}>
			<nav>
				<h1>Ariflix</h1>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="">Filmes</a></li>
					<li><a href="">Séries</a></li>
				</ul>
			</nav>
			<a href="/">
				<img src="https://th.bing.com/th/id/OIP.omNT-0whNb_xGm45kdOXbAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
			</a>
		</header>
	)
}