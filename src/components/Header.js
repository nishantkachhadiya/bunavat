import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Dropdown, Button } from "react-bootstrap";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { logout } from "../redux/apiActions/user.action";
import { ThemeConsumer } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import BASE_URL from "../_constant/index";

export default function Header() {
    const changeloction = window.location.pathname;
    const [headerColor, setHeaderColor] = useState(false)

    const [scroll, setScroll] = useState(false);

    const onChagewalletbar = () => {
        const current_loction = window.location.pathname;
        var mypath = ["/category"].includes(current_loction)
        if (mypath) {
            setHeaderColor(true);
        }
        else {
            setHeaderColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    useEffect(() => {
        onChagewalletbar();
    }, [changeloction]);

    return (
        <>
            <header className={scroll || headerColor ? "bunavat_wrapper active" : "bunavat_wrapper"}>
                <div className="bunavat_nav_link_wrap">
                    <div className="container">
                        <div className="bunavat_nav_link_inner">
                            <ul className="bunavat_nav_link_inner_list">
                                <li>
                                    <div className="bunavat_nav_wrap">
                                        <p>Shop</p>
                                        <span>
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 0.840088L4.82118 4.84009L8.64706 0.840088" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bunavat_nav_wrap">
                                        <p>Club</p>
                                        <span>
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 0.840088L4.82118 4.84009L8.64706 0.840088" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="bunavat_nav_wrap">
                                        <p>Reviews</p>
                                    </div>
                                </li>
                            </ul>

                            <Link to="/" >
                                <svg width="84" height="36" viewBox="0 0 84 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6112_2670)">
                                        <path d="M21.95 26.27L17.58 21.9V12.57C17.58 9.43 15.02 6.87 11.88 6.87C9.35997 6.87 7.20997 8.52 6.46997 10.79L3.89997 8.22L4.90997 7.21L3.69997 6L0.469971 9.23L1.67997 10.44L2.68997 9.43L6.18997 12.93V22.27C6.18997 25.41 8.74997 27.97 11.89 27.97C14.41 27.97 16.56 26.32 17.3 24.05L20.74 27.49L21.95 26.28V26.27ZM11.89 8.58C14.09 8.58 15.88 10.37 15.88 12.57V20.2L7.90997 12.23C8.07997 10.19 9.79997 8.58 11.89 8.58ZM11.89 26.25C9.68997 26.25 7.89997 24.46 7.89997 22.26V14.63L15.87 22.6C15.7 24.64 13.98 26.25 11.89 26.25Z" fill="white" />
                                        <path d="M83.24 7.95996H34.16V9.66996H39V12.16C38.21 11.54 37.23 11.19 36.22 11.19C33.75 11.19 31.73 13.2 31.73 15.68V21.33C31.73 23.8 33.74 25.82 36.22 25.82C37.23 25.82 38.21 25.47 39 24.85V26.34C37.92 26.7 37.18 27.71 37.18 28.87V31.48H38.89V28.87C38.89 28.34 39.32 27.91 39.85 27.91C40.38 27.91 40.81 28.34 40.81 28.87V31.19C40.81 32.72 39.56 33.97 38.03 33.97C36.5 33.97 35.25 32.72 35.25 31.19V28.58H33.54V31.19C33.54 33.66 35.55 35.68 38.03 35.68C40.51 35.68 42.52 33.67 42.52 31.19V28.87C42.52 27.71 41.78 26.71 40.7 26.34V9.66996H51.58V12.54C50.79 11.92 49.81 11.57 48.8 11.57H47.8C46.6 11.57 45.47 12.04 44.63 12.88C43.78 13.73 43.32 14.86 43.32 16.05V23.14C43.32 24.61 44.52 25.81 45.99 25.81C47.46 25.81 48.66 24.61 48.66 23.14V16.05C48.66 14.84 47.84 13.81 46.73 13.48C47.07 13.34 47.43 13.27 47.8 13.27H48.8C50.33 13.27 51.58 14.52 51.58 16.05V27.33H53.29V9.66996H56.62V27.34H58.33V9.66996H68.93V12.16C68.14 11.54 67.16 11.19 66.15 11.19C63.68 11.19 61.66 13.2 61.66 15.68V21.33C61.66 23.8 63.67 25.82 66.15 25.82C67.16 25.82 68.14 25.47 68.93 24.85V27.34H70.64V9.66996H78.81V11.59C78.33 11.33 77.8 11.19 77.24 11.19C75.43 11.19 73.96 12.66 73.96 14.47V23.36C73.96 25.61 75.79 27.44 78.04 27.44C80.29 27.44 82.12 25.61 82.12 23.36V20.22H80.41V23.36C80.41 24.67 79.34 25.74 78.03 25.74C76.72 25.74 75.65 24.67 75.65 23.36V14.47C75.65 13.61 76.35 12.9 77.22 12.9C78.09 12.9 78.79 13.6 78.79 14.47V14.75H80.46L80.5 14.51V9.66996H83.5V7.95996H83.22H83.24ZM66.16 12.9C67.69 12.9 68.94 14.15 68.94 15.68V21.33C68.94 22.86 67.69 24.11 66.16 24.11C64.63 24.11 63.38 22.86 63.38 21.33V15.68C63.38 14.15 64.63 12.9 66.16 12.9ZM36.22 12.9C37.75 12.9 39 14.15 39 15.68V20.08L33.62 14.7C34.03 13.62 35.05 12.9 36.22 12.9ZM36.22 24.11C34.69 24.11 33.44 22.86 33.44 21.33V16.93L38.82 22.31C38.41 23.39 37.39 24.11 36.22 24.11ZM46.96 23.15C46.96 23.68 46.53 24.11 46 24.11C45.47 24.11 45.04 23.68 45.04 23.15V16.06C45.04 15.53 45.47 15.1 46 15.1C46.53 15.1 46.96 15.53 46.96 16.06V23.15Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6112_2670">
                                            <rect width="83.06" height="29.68" fill="white" transform="translate(0.469971 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>

                            <ul className="account_info">
                                <li>
                                    <button>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_6128_2675)">
                                                <path d="M12.52 23.9902C18.678 23.9902 23.67 18.9982 23.67 12.8402C23.67 6.68221 18.678 1.69019 12.52 1.69019C6.36202 1.69019 1.37 6.68221 1.37 12.8402C1.37 18.9982 6.36202 23.9902 12.52 23.9902Z" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M12.52 14.7001C14.6905 14.7001 16.45 12.9406 16.45 10.7701C16.45 8.59961 14.6905 6.84009 12.52 6.84009C10.3495 6.84009 8.59003 8.59961 8.59003 10.7701C8.59003 12.9406 10.3495 14.7001 12.52 14.7001Z" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M18.27 22.3802C18.43 21.8502 18.51 21.2802 18.51 20.7002C18.51 17.3902 15.83 14.7102 12.52 14.7102C9.21003 14.7102 6.53003 17.3902 6.53003 20.7002C6.53003 21.2802 6.62003 21.8502 6.77003 22.3802" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6128_2675">
                                                    <rect width="24" height="24" fill="white" transform="translate(0.52002 0.840088)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_6112_2679)">
                                                <path d="M22.15 3.33496H1.37V22.185H22.15V3.33496Z" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M15.23 8.33496V22.185" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M8.30005 8.33496V22.185" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M22.15 15.2651H1.38" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M22.15 8.33496H1.38" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M5.76001 6.13502V0.64502" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M17.76 6.13502V0.64502" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6112_2679">
                                                    <rect width="22.48" height="22.39" fill="white" transform="translate(0.52002 0.64502)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="cart_items">
                                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_6112_2688)">
                                                <path d="M20.1199 9.34985H3.14993L1.23993 22.7399H22.0199L20.1199 9.34985Z" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M13.1299 9.35019V4.19019C13.1299 2.53019 11.7899 1.19019 10.1299 1.19019C8.46994 1.19019 7.12994 2.53019 7.12994 4.19019V9.36019" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M16.53 9.34995V4.18995C16.53 3.29995 16.14 2.49995 15.53 1.94995" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" strokeLinecap="round" />
                                                <path d="M17.63 22.7399L15.72 9.34985" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6112_2688">
                                                    <rect width="23" height="23" fill="white" transform="translate(0 0.340088)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <p>3</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="sidebar_menu_wrapper">
                    <div className="sidebar_menu_list">
                        <div className="top_search_wrap">
                            <div className="search_input">
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_6210_1168)">
                                            <path d="M9.4201 17.9901C14.1532 17.9901 17.9901 14.1532 17.9901 9.4201C17.9901 4.68702 14.1532 0.850098 9.4201 0.850098C4.68702 0.850098 0.850098 4.68702 0.850098 9.4201C0.850098 14.1532 4.68702 17.9901 9.4201 17.9901Z" stroke="black" stroke-width="1.7" stroke-miterlimit="10" />
                                            <path d="M15 15L22.56 22.56" stroke="black" stroke-width="1.7" stroke-miterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6210_1168">
                                                <rect width="23.16" height="23.16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <input type="text" placeholder="Search" />
                                <button type="button" className="addvanced_btn">Advanced</button>
                            </div>
                            <div className="sidebar_wrapper">
                                <ul className="common_link_wrap">
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>Most Loved</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>Newest</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>Kind</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="inner_menu">
                                            <button to="/" className="common_arrow_btn common_sidebar_link">
                                                <span>Bridal</span>
                                                <span>
                                                    <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513" stroke="black" stroke-width="1.7" stroke-miterlimit="10" />
                                                        <path d="M0.800049 12.5044H19.7267" stroke="black" stroke-width="1.7" stroke-miterlimit="10" />
                                                    </svg>
                                                </span>
                                            </button>

                                            <div className="inner_menu_wrap">
                                                <ul className="common_link_wrap">
                                                    <li>
                                                        <Link to="/" className="common_sidebar_link">
                                                            <span>Sari</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>Festive</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>Regional</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>By Designers</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="common_sidebar_link">
                                            <span>Clearance</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </header>
        </>
    );
    // }
}
