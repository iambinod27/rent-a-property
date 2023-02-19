import { CiLocationOn } from "react-icons/ci";

const Card = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="House"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Palm Harbor
            <div className="badge badge-success">Popular</div>
          </h2>
          <p className="text-[#838383] flex items-center">
            <CiLocationOn />
            Hattiban, Lalitpur, Kathmandu
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
