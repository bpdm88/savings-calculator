import logo from "../assets/images/sprout.svg";
const Header = () => {
    return (
        <header>
            <h1 className="heading--alpha">Savings Calculator</h1>
            <img src={logo} alt="logo" />
        </header>
    );
};

export default Header;
