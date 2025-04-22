import estilos from './Modal.module.css';

export function Modal({movie, onClose}){

    // se clicando fora de um card, não quero que o código seja executado
    if(!movie){
        return null;
    }

    return(
        <div className={estilos.modalBack}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title || movie.name}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={estilos.imgModal}/>
                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${movie.popularity ?? 'Não disponível no momento, aguarde'}`}</li>
                        <li>{`Data de Lançamento: ${movie.realise_date}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overviwe}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}