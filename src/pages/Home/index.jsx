import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import './style.scss'

export function Home(){
	
	const [blackHeader, setBlackHeader] = useState(false); //verificar se o menu vai ficar preto

	return(
		<div className="page">
			<Header black={blackHeader} />			
			<Outlet />			
		</div>
	)
}

