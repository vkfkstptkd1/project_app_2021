import React from "react";
import axios from "axios";
class App extends React.Component{
    //constructor(){} App class가 호출되면 바로 호출 (생성자) --render 전  
    //componentDidMount(){} component가 처음 render 할때 호출--render 후
    //componentDidUpdate(){} component가 update된 후 호출--render 함수 안에 무언가 바뀌면 호출
    //componentWillUnmount(){} component가 떠날 때 호출
    //setState : state를 refresh하고 render을 refresh해주는 함수, 
    //current : this.state.count라고 명시해도 되지만, 외부 state에 의존하지 않기 위해서 (??) current 함수를 사용하는게 훨씬 더 효율적임.
    
    state = {
        isLoading : true,
        movies : []
    }
    getMovies = async () => {//async -> 이 함수는 비동기, ="너는 이 함수를 기다려야 해" axios는 느리기때문에..
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");//그래서 async 안에 뭘기다려? await 이후에 나오는걸! axios가 끝날때까지 기다렸다가 계속해
    }
    async componentDidMount(){//mount이후
        this.getMovies();
    }
    render(){
        const { isLoading } = this.state;
        return <div>{ isLoading ? "Loading ..." : "We are ready" }</div>;
    };
};

export default App;