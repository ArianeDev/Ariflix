import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Outlet } from "react-router-dom";
import './style.scss'

export function Home(){	
	const [blackHeader, setBlackHeader] = useState(false); //verificar se o menu vai ficar preto

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
			<Outlet />	
			<Footer />		
		</div>
	)
}

