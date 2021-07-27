import React from "react";

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
    componentDidMount() {
        setTimeout(() => {//일정 시간 뒤 실행시키는 javascript 타이머 함수
            this.setState({ isLoading: false }); //setState 내부에는 state에 정의되어있지 않은 변수 그냥 써놓아도 에러 안생김
        },6000);//6초후 실행
    }
    render(){
        const { isLoading } = this.state;
        return <div>{ isLoading ? "Loading ..." : "We are ready" }</div>;
    };
};

export default App;