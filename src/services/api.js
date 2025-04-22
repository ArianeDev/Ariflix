const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_URL}${endpoint}`);
	const json = await req.json();
	return json;
}

export default {
	get_home: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais do Ariflix',
				items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'trending',
				title: 'Recomendados para você',
				items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'toprated',
				title: 'Em alta',
				items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'documentary',
				title: 'Documentário',
				items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
			},
			
		]
	},

	get_movieInfo: async (movie_id, type) => {
		let info = {};

		if(movie_id){
			switch(type){
				case 'movie':
					info = await basicFetch(`/movie/${movie_id}?language=pt-BR&api_key=${API_KEY}`);
					break;

				case 'tv':
					info = await basicFetch(`/tv/${movie_id}?language=pt-BR&api_key=${API_KEY}`);
					break;

				default:
					info = null;
					break;
			}
		}
		return info;
	}
}