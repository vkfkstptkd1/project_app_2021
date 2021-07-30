import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie ({year,title,summary,poster,genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="move__genres">
                    {genres.map((genre, index) => (//map은 무조건 key가 필요함. 그리고 자동으로 index를 매겨줌
                        <li key={index} className="genres__genre">{/*그래서 그걸 key로 사용*/}
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>{/* p는 단락태그 */}
            </div>
        </div>
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;