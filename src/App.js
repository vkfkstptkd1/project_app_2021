import React from "react";
import PropTypes from "prop-types";

const foodILike = [
    {
        id:1,
        name: "kimchi",
        image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        //rating: "5"
    
    },
    {   
        id:2,
        name: "samgyupsal",
        image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: "4.9"
    },
    {
        id:3,
        name: "bibimbap",
        image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: "4.8"
    },
    {
        id:4,
        name: "doncasu",
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: "4.7"
    },
    {
        id:5,
        name: "kimbap",
        image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: "4.6"
    }
];

function Food({ name, picture,rating }) {
    return ( 
        <div>
            <h2 > I like { name } </h2> 
            <h4>{rating}/5.0</h4>
            <img src = { picture } alt={name}/>
        </div>
    );
}

Food.propTypes={//무조건 propTypes라는 이름으로 명시되어야 함. proptypes를 정의해주고 보호해줌
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.string//isrequired가 없음. 꼭 필요하지 않은 속성
};

function App() {
    return ( 
            <div> 
                {foodILike.map(dish => (//형태는 ()안에 함수 적고 바깥에 함수정의해서 쓸 수 있음. 
                < Food 
                    key={ dish.id }//id로 object들을 구분해놓지 않으면 console창에 error
                    name = { dish.name }
                    picture = { dish.image }
                    rating={ dish.rating }/>
                    ))} 
            </div>
            );
        }
export default App;