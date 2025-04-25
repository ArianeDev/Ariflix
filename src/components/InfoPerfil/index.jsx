import React from "react";
import './style.scss';

export function InfoPerfil(){
	return(
		<div className="containerInfo">
			<div className="info">
				<div className="img">
					<img src="https://th.bing.com/th/id/OIP.omNT-0whNb_xGm45kdOXbAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
				</div>
				<h1>▼ Ariane Silva</h1>
			</div>
			<div className="not">
				<h2>Notificações ▷</h2>
				<p>Nenhuma notificaçõa</p>
			</div>
			<div className="downloads">
				<h2>Downloads ▷</h2>
				<p>Nenhum download realizado</p>
			</div>
		</div>
	)
}