import React from "react";

class App extends React.Component{
    //constructor(){} App class가 호출되면 바로 호출 (생성자) --render 전  
    //componentDidMount(){} component가 처음 render 할때 호출--render 후
    //componentDidUpdate(){} component가 update된 후 호출--render 함수 안에 무언가 바뀌면 호출
    //componentWillUnmount(){} component가 떠날 때 호출
    state = {//동적 데이터 사용하기위해 사용하는 object.
        count: 0
    };
    
    add=()=>{
        this.setState(current=>({count: current.count + 1}));
    };
    minus=()=>{
        this.setState(current=>({count: current.count - 1}));
    };
    //setState : state를 refresh하고 render을 refresh해주는 함수, 
    //current : this.state.count라고 명시해도 되지만, 외부 state에 의존하지 않기 위해서 (??) current 함수를 사용하는게 훨씬 더 효율적임.

    render(){
        console.log("i am rendering");
        return (
        <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick = {this.add}>add</button>
            <button onClick={this.minus}>minus</button>
        </div>/* 만약 this.add()의 형태라면 실행하자마자 console창에 add출력
                 그냥 this.add이면 클릭할때만 출력, ()는 '즉시,바로' 를 의미 */
        );
    };
};


export default App;