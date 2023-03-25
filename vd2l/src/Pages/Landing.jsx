import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Valorant from "../assets/valorant.png";
import Signup from "../assets/Signup.svg";
import DottoreDesktop from "../assets/DottoreDesktop.svg";
import DottoreMobile from "../assets/DottoreMobile.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDocs } from "firebase/firestore";
import { isOpenDocRef } from "../firebase";

export default function Landing() {

	const [showDottore, setShowDottore] = useState(true);
	const [signupsOpen, setSignupsOpen] = useState(null); 
	const handleDottore = () => {
		setShowDottore(false);
	}

	let signupObj;

	useEffect(() => {
		getDocs(isOpenDocRef)
		.then(snapshot => {
			signupObj = snapshot.docs.map(doc => {
				return {
					...doc.data()
				}
			})
	        setSignupsOpen(signupObj[0].isOpen);
	        console.log(signupsOpen);
		})
		.catch(err => {
			console.log(`%cError: ${err.message}`, "color:red");
		})
	}, []);

	return (
		<div className="landing-page">
			<Navbar />
			<div className="content-container">

				<motion.div className="card" initial={{ x: -1000 }} animate={{ x:0 }} transition={{ duration: .5, type: "spring", bounce: .3}}> 
					<div className="card-container">
						<div className="card-header">
							<div className="card-header-text">
								<p className="current-season">
									Current Season:
								</p>
								<h1 className="season-no">Season 0</h1>
							</div>
							<img
								src={Valorant}
								alt="Valorant Logo"
								className="valorant-logo"
							/>
						</div>

						<div className="card-body">
							<h1 className="signup-status">
								Signups are currently{" "}
								{signupsOpen ? <span className="blue">OPEN</span> : <span className="red">CLOSED</span>}
							</h1>
							<motion.div className="signup-button" whileHover={{ scale: 1.1 }}>
								<Link to="/signup">
								<div className="signup-button-content">
									<p className="signup-button-text">
										Sign Up
									</p>
										<img
											src={Signup}
											alt="Signup Logo"
											className="signup-logo"
										/>
								</div>
								</Link>
							</motion.div>
							<div className="signup-dates">
								<div className="start-date">
									<div className="date-title">Start Date</div>
									<div className="date">March 24</div>
								</div>
								<div className="end-date">
									<div className="date-title">End Date</div>
									<div className="date">April 9 2023</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{showDottore && <img
					src={DottoreMobile}
					alt="Hero Picture"
					className="dottore-mobile"
					onClick={handleDottore}
				/>}
				<img
					src={DottoreDesktop}
					alt="Hero Picture"
					className="dottore-desktop"
				/>
			</div>
			<Footer />
		</div>
	);
}
