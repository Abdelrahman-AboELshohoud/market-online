import { FaMountainSun } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = ({style = ""}) => {
  return (
    <Link
      to="/"
      className={`flex gap-2 items-center font-extrabold text-pretty text-primary text-xl ${style}`}
    >
      <FaMountainSun color="#ED9907" size={34} />
      SummitShop
    </Link>
  );
};

export default Logo;
