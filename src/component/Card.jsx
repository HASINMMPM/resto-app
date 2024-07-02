import { Link } from "react-router-dom";

const Card = ({ cardItem }) => {
  return (
    <div className=" py-14">
      <Link to={`/menu/${cardItem._id}`}>
        <div className=" transition ease-in-out delay-150 cursor-pointer  hover:bg-slate-50 rounded-xl hover:-translate-y-1 hover:z-40 hover:scale-110  duration-300  card bg-white text-black w-36 md:w-96 hover:shadow-xl">
          <figure>
            <img src={cardItem.image} alt="Shoes"  className="bg-yellow bgshaper"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cardItem.name}</h2>
            <p>{cardItem.recipe}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
