import Menu from "../assets/HamburgerMenu.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	function handleHamburgerOpen() {
		setHamburgerOpen((hamburgerOpen) => !hamburgerOpen);
	}

	return (
		<div className="navbar">
			<div className="top-blue-header"></div>
			<motion.div
				className="nav-items"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				<motion.h3 className="vd2l-text-logo" whileHover={{scale: 1.05}}><Link to="/">VD2L</Link></motion.h3>
				<nav className="desktop-nav-bar">
					<p className="nav-item"><Link to="/about">About Us</Link></p>
					<p className="nav-item"><Link to="/rules">Rules</Link></p>
					<p className="nav-item"><Link to="/season">Season 0</Link></p>
					<p className="nav-item"><Link to="/inhouse">Inhouse</Link></p>
				</nav>
				<img
					src={Menu}
					alt="Hamburger Menu Icon"
					className="hamburger-menu-icon"
					onClick={() => handleHamburgerOpen()}
				/>
			</motion.div>
			<AnimatePresence>
				{hamburgerOpen && (
					<motion.div className="hamburger-menu-sidebar" initial={{x: 1000}} animate={{x:0}} exit={{x: 1000}}>
						<p
							className="x-button"
							onClick={() => handleHamburgerOpen()}
						>
							x
						</p>
						<nav>
							<p className="nav-item"><Link to="/about">About Us</Link></p>
							<p className="nav-item"><Link to="/rules">Rules</Link></p>
							<p className="nav-item"><Link to="/season">Season 0</Link></p>
							<p className="nav-item"><Link to="/inhouse">Inhouse</Link></p>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
