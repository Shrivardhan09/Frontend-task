import { useState } from "react"
import HomeBanner from "./HomeBanner"
import HomeBar from "./HomeBar"
import './home.css'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)


    let cross = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 5L5 19M5.00003 5L19 19" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
        <rect x="0.5" y="0.5" width="23" height="23" stroke="white" />
    </svg>

    let menu = <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1C18 1.26522 17.8946 1.51957 17.7071 1.70711C17.5196 1.89464 17.2652 2 17 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM17 6H1C0.734784 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8H17C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM17 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12Z" fill="white" />
    </svg>

    const handleClickMenu = () => {
        setIsOpen(!isOpen)
    };
    const switchToogle = () => {
        if (isOpen) {
            return cross
        } else {
            return menu;
        }
    }

    return (
        <div className="home-css">
            <div className="logo-wishlist">
                <div className="left-home">
                    <p>ShopKart</p>
                </div>
                <div className="right-home">
                    <p className="wishlist">WISHLIST &#40;0&#41;</p>
                    <p className="shop">SHOP &#40;0&#41;</p>
                    <p className="menu" onClick={handleClickMenu}>
                        {switchToogle()}
                    </p>
                    {isOpen && <div className="open-menu">
                        <div className="menu-list">
                            <p>HOME</p>
                            <p>ABOUT</p>
                            <p>OUR PRODUCTS</p>
                            <p>CONTACT US</p>
                        </div>
                    </div>
                    }
                </div>
                <p className="star-ab">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Star 1" d="M10.5721 0L12.2915 9.21102L21.1442 11L12.2915 12.789L10.5721 22L8.8527 12.789L0 11L8.8527 9.21102L10.5721 0Z" fill="white" />
                    </svg>
                </p>
            </div>
            <div className="home-bar">
                <HomeBar />
            </div>
            <div className="home-banner">
                <HomeBanner />
            </div>
            <div className="see-more">
                <p>See more</p>
                <div>
                    <svg width="15" height="15" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Secondary button">
                            <rect id="Rectangle 18" width="45" height="45" fill="#161615" />
                            <path id="Vector" d="M28.9959 29.1648C28.9995 24.0427 28.9811 19.5589 29 15C23.8819 15.0036 19.3859 15.0186 14.8347 15.0041C14.8291 16.3618 14.8272 17.4011 14.8221 18.7218C17.5043 18.7288 20.315 18.7218 22.6435 18.7221L14.3068 27.0585C13.8958 27.4698 13.8981 28.2202 14.3117 28.6341L15.3657 29.688C15.7796 30.1019 16.5303 30.1043 16.9414 29.6932L25.278 21.3568C25.2744 23.9613 25.2817 26.5655 25.2703 29.17C26.5249 29.1631 27.8909 29.1692 28.9959 29.1648Z" fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default Home
