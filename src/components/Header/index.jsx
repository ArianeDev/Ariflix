import './style.scss'

import { Link } from "react-router-dom";

export function Header({black}){
	return(
		<header className={black ? 'black' : ''}>
			<nav>
				<h1>Ariflix</h1>
				<ul>
					<Link to="/" className='link'> 
						<li>Home</li>
					</Link>
					<Link to="/movies" className='link'>
						<li>Filmes</li>
					</Link>
					<Link to="/series" className='link'>
						<li>Séries</li>
					</Link>
				</ul>
			</nav>
			<Link to="/user">
				<img src="https://th.bing.com/th/id/OIP.omNT-0whNb_xGm45kdOXbAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
			</Link>
		</header>
	)
}