import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import useWindowSize from '../../utils/useWindowSize';
import { getMenu } from './data';

import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import { ReactComponent as LogoWhiteSvg } from '../../assets/images/logo-white.svg';
import '../../assets/style/header.scss';

const Header = () => {

	const { width } = useWindowSize();
	// Check screen size
	const overScreenMd = (width > 768 || window.innerWidth > 768);
	const inferiorScreenMd = (width <= 768 || window.innerWidth <= 768);

	// Scroll states
	const [scrolling, setScrolling] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	// Get menu datas
	const menuItems = getMenu();

	// Menu button state
	const [menu, setMenu] = useState(false);

	const handleMenu = () => {
		if(inferiorScreenMd) {
			setMenu(!menu);
		}
	};

	useEffect(() => {

		const onScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop);
			setScrolling(e.target.documentElement.scrollTop > 100);
		};

		// Remove class `open`
		if(overScreenMd) {
			setMenu(false);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollTop, overScreenMd]);

	// Smooth scroll & offset
	const scrollWidthOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -80; // previous container's margin-bottom

		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	};

	return (
		<header className={scrolling ? 'scroll' : ''}>
			<div className="container">
				<nav className="menu-container" role="navigation" aria-label="menu principal">
				
					<div className="logo" aria-hidden="true">
						{
							scrolling ? 
								<LogoSvg />
							: inferiorScreenMd ?
								<LogoSvg />
							:
								<LogoWhiteSvg />
						}
					</div>
				
					<ul className={menu && inferiorScreenMd ? 'menu open' : 'menu'}>
						{
							menuItems.map((item, index) =>
								<li className="menu-item" key={index}>
									<HashLink
										smooth
										scroll={scrollWidthOffset}
										to={item.link}
										onClick={handleMenu}
									>
										{item.title}
									</HashLink>
								</li>
							)
						}
					</ul>

				{ inferiorScreenMd &&
						<button
							className={menu ? 'btn btn-menu open' : 'btn btn-menu'}
							type="button"
							aria-label="Toggle navigation"
							aria-expanded={menu ? true : false}
							onClick={handleMenu}
						>
							<span className="trait-1"></span>
							<span className="trait-2"></span>
							<span className="trait-3"></span>
						</button>
					}
				</nav>
			</div>
		</header>
	)
}

export default Header;
