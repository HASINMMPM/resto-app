import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Card from "./Card";
// import { BiColor } from "react-icons/bi";


const Specialdish = () => {
  const [recipes, setRecipes] = useState([]);
  // const slider = React.useRef(null);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => {
        const special = data.filter((item) => item.category === "popular");
        setRecipes(special)
        console.log(special);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true, // make the slider infinite for better UX
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // keep dots for navigation
        },
      },
    ],
  };
  
  return (
    <div className="sitesize py-20 bg-white ">
  <p className="sub-title">Special dishes</p>
  <h3 className="title">
    standout dishes from our menu
  </h3>
  <Slider {...settings}>
    {
      recipes.map((cardItem, index) => (
        <Card key={index} cardItem={cardItem}/> 
      ))
    }
  </Slider>
</div>

  );
};

export default Specialdish;
 