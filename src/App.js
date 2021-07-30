import React from "react";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";
class App extends React.Component{
    //constructor(){} App class가 호출되면 바로 호출 (생성자) --render 전  
    //componentDidMount(){} component가 처음 render 할때 호출--render 후
    //componentDidUpdate(){} component가 update된 후 호출--render 함수 안에 무언가 바뀌면 호출
    //componentWillUnmount(){} component가 떠날 때 호출
    //setState : state를 refresh하고 render을 refresh해주는 함수, 
    //current : this.state.count라고 명시해도 되지만, 외부 state에 의존하지 않기 위해서 (??) current 함수를 사용하는게 훨씬 더 효율적임.
    
    state = {//state를 쓰려면 App을 class로 선언.
        isLoading : true,
        movies : []
    }
    getMovies = async () => {//async -> 이 함수는 비동기, ="너는 이 함수를 기다려야 해" axios는 느리기때문에..        
        const { // = movies.data.data.movies 를 es6 로 나타낸것
            data: {
                data: { movies }
            }
        } = await axios.get(//그래서 async 안에 뭘기다려? await 이후에 나오는걸! axios가 끝날때까지 기다렸다가 계속해
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
            );
        this.setState({ movies, isLoading : false });//= this.setState({movies:movies})
    }
    async componentDidMount() {//mount이후
        this.getMovies();
    }
    render() {
        const { isLoading,movies } = this.state;
        return (
        <section class = "container">
            { isLoading ?
            (<div class="loader">
                <span class="loader__text">Loading..</span>
            </div>)
            : movies.map( movie => (
                <div class="movies">
                    <Movie 
                        key={movie.id}
                        id={movie.id} 
                        year={movie.year} 
                        title={movie.title} 
                        summary={movie.summary} 
                        poster={movie.medium_cover_image}
                    />
                </div>
        ))}
        </section>
        )
    }
}

export default App;