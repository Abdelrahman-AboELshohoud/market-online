import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ links, type = "1" }) => {
  //   console.log + links;
  const location = useLocation();
  const path = location.pathname;
  const getLinkStyle = (elpath) => {
    let style = `text-type-secondary h-full w-full min-w-fit text-center pt-1 font-normal ${
      type === "1"
        ? "hover:underline"
        : path !== elpath
        ? "hover:bg-mblack hover:bg-opacity-10"
        : ""
    } ${
      path === elpath && type === "2" && "font-semibold bg-black bg-opacity-20"
    }`;
    return style;
  };
  const getNavStyle = () => {
    let style = `${
      type === "2"
        ? "md:hidden flex justify-between w-full h-10"
        : "md:flex hidden gap-4 lg:gap-8 ml-2"
    } items-center`;
    return style;
  };
  return (
    <nav className={getNavStyle()}>
      {links.map((el) => (
        <Link className={getLinkStyle(el.path)} to={el.path} key={el.name}>
          {el.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
