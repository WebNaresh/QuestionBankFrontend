import { React, useRef, useState } from 'react';
import "./navbar.css";
import SideNav from './sidenav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import '../Footer/footer.css';

const Navbar = () => {

    const ref = useRef(null);


    const [Jadu, setJadu] = useState("");
    const [side, setSide] = useState("side");
    const [compactSearch, setCompactSearch] = useState("");
    const [hamburgerColor, setHamburgerColor] = useState("red");
    const [visible, setVisible] = useState("");
    const [mainNavHide, setMainNavHide] = useState("");
    const [navbarColor, setNavbarColor] = useState("");
    const changesvg = (onClick) => {
        if (Jadu === "") {
            setVisible("hide");
            setJadu("open");
            setSide("side1");
            setHamburgerColor("red");

        } else {
            setJadu("");
            setVisible("");
            setSide("side");
            setHamburgerColor("red");

        }
    };
    onscroll = () => {
        if (window.scrollY === 0) {
            setCompactSearch("");
            setMainNavHide("");
            setNavbarColor("");
        } else if (window.scrollY > 0) {
            setCompactSearch("compactSearch");
            setMainNavHide("hide4");
            setNavbarColor("navbarColor");

        }

    };

    return (
        <>
            <div className={`navbar1 ${navbarColor}`} >
                <div id="visibleNav" className={`${mainNavHide}`}>
                    <h1 className={'font link_underline'}>Question_Paper</h1>
                    <div className={`getMe ${visible}`}>
                        <FontAwesomeIcon style={{ color: "black" }} className='fa-icon2'
                            size={'2x'}
                            icon={faSearch} />
                        <input type="text" name="name" autoComplete="off" className={`input1 ${compactSearch}`} />


                    </div>
                </div>
                <ul className={`ulList1`} ref={ref} onClick={changesvg}>
                    <div className={`${Jadu}`} id="nav-icon1">
                        <span style={{ background: hamburgerColor }}></span>
                        <span style={{ background: hamburgerColor }}></span>
                        <span style={{ background: hamburgerColor }}></span>
                    </div>
                </ul>
            </div >
            <div style={{ overflow: "hidden" }}>
                <div className={`sidenav ${side}`}>
                    <SideNav ref={ref} />
                </div>
            </div>
            <div className="space">

            </div>
        </>
    );
};

export default Navbar;