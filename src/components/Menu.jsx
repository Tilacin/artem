import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1023) {
                setShowMenu(false); // скрывает меню при изменении размера экрана на более 1023px
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="flex justify-between items-center h-[56px] w-full mt-11">
            <img src="/icons/logo.svg" alt="realkey" width={198} height={54} />
            <div className="lg:hidden" onClick={toggleMenu}>
                <button id="burgerMenuButton" className='flex flex-col gap-[7px]'>
                    <div className='w-[30px] h-[2px] bg-[#5A9CFF]'></div>
                    <div className='w-[30px] h-[2px] bg-[#5A9CFF]'></div>
                    <div className='w-[23px] h-[2px] bg-[#5A9CFF] '></div>
                </button>
            </div>
            <ul className={`flex lg:flex xl:gap-32 lg:gap-20 text-xl
                ${showMenu && windowWidth <= 1023 ? 
                "absolute top-[140px] left-0 right-0 bg-[#f8f8f8] p-8 pb-[100px] gap-8 lg:hidden flex-col items-center" 
                : "hidden"}`}>
                <li className="border-b-4 border-transparent hover:border-[#5A9CFF] transition-colors duration-150">
                    <Link to="/">Главная</Link>
                </li>
                <li className="border-b-4 border-transparent hover:border-[#5A9CFF] transition-colors duration-150">
                    <Link to="/services">Услуги</Link>
                </li>
                <li className="border-b-4 border-transparent hover:border-[#5A9CFF] transition-colors duration-150">
                    <Link to="/ipoteka">Ипотека</Link>
                </li>
                <li className="border-b-4 border-transparent hover:border-[#5A9CFF] transition-colors duration-150">
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li className="border-b-4 border-transparent hover:border-[#5A9CFF] transition-colors duration-150">
                    <Link to="/garant">Гарантии</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;