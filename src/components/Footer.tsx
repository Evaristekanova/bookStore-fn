import { Link } from "react-router-dom";
const Footer = () => {
  const curentYear = new Date().getFullYear();
  return (
    <div>
      <div className="flex justify-between h-20 border-t mt-12 font-light">
        <div className="ml-10 pt-8">Online Library App</div>
        <div className="flex justify-around pt-8">
          <Link to="/home" className="text-center mr-4">
            Home
          </Link>
          <Link to="/login" className="text-center mr-4">
            Login
          </Link>
          <Link to="/register" className="text-center ml-4">
            Register
          </Link>
        </div>
        <div className="flex mr-16 pt-8">
          <Link className="ml-8" to={"https://github.com/Evaristekanova"}>
            github
          </Link>
          <Link
            className="ml-8"
            to={"https://www.linkedin.com/in/evariste-kanova-7b1b3b1b2/"}
          >
            linkedin
          </Link>
          <Link
            className="ml-8"
            to={"https://www.facebook.com/evariste.kanova"}
          >
            facebook
          </Link>
          <Link className="ml-8" to={"https://twitter.com/EvaristeKanova"}>
            twitter
          </Link>
        </div>
      </div>
      <div className="text-center font-light pt-8">
        &copy; {curentYear} Online Library App
      </div>
    </div>
  );
};

export default Footer;
