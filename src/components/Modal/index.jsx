import './style.scss';

export function Modal({movie, onClose}){

    // se clicando fora de um card, não quero que o código seja executado
    if(!movie){
        return null;
    }

    return(
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modalHeader">
                    <button onClick={onClose}>x</button>
                </div>
                <div className="imgDetails">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className="imgModal"/>
                    <h2>{movie.title || movie.name}</h2>
                    <ul className="movieDetails">
                        <li>{`Popularidade: ${movie.popularity ?? 'Não disponível no momento.'}`}</li>
                        <li>{`Data de Lançamento: ${movie.realise_date}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overviwe ?? 'Não disponível no momento.'}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}