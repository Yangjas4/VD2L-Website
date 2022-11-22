import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Valorant from "../assets/valorant.png";
import Signup from "../assets/Signup.svg";
import DottoreDesktop from "../assets/DottoreDesktop.svg";
import DottoreMobile from "../assets/DottoreMobile.svg";
import { motion } from "framer-motion";

export default function Landing() {
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
								<span className="red">OPEN</span>
							</h1>
							<motion.div className="signup-button" whileHover={{ scale: 1.1 }}>
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
							</motion.div>
							<div className="signup-dates">
								<div className="start-date">
									<div className="date-title">Start Date</div>
									<div className="date">TBD</div>
								</div>
								<div className="end-date">
									<div className="date-title">End Date</div>
									<div className="date">TBD</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<img
					src={DottoreMobile}
					alt="Hero Picture"
					className="dottore-mobile"
				/>
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
