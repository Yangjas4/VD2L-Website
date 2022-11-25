import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SignupRow from "../Components/SignupRow";
import TeamsRow from "../Components/TeamsRow";
import MatchupsRow from "../Components/MatchupsRow";
import Signup from "../assets/Signup.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Season() {
	const [tabSelected, setTabSelected] = useState(1);

    function toggleTab(tab) {
        if (tab === 1) {
            setTabSelected(1);
        } else if (tab === 2) {
            setTabSelected(2);
        } else if (tab === 3) {
            setTabSelected(3);
        }
    }

	return (
		<div className="season">
			<Navbar />
			<div className="season-header">
				<h1 className="season-title">Season 0</h1>
				<nav className="season-nav">
					<h4
						className={`season-tab ${
							tabSelected === 1 ? "selected" : ""
						}`}
                        onClick={() => toggleTab(1)}
					>
						Signups
					</h4>
					<h4 className="season-tab-seperator">|</h4>
					<h4
						className={`season-tab ${
							tabSelected === 2 ? "selected" : ""
						}`}
                        onClick={() => toggleTab(2)}
					>
						Teams
					</h4>
					<h4 className="season-tab-seperator">|</h4>
					<h4
						className={`season-tab ${
							tabSelected === 3 ? "selected" : ""
						}`}
                        onClick={() => toggleTab(3)}
					>
						Schedule
					</h4>
				</nav>
				<motion.div whileHover={{scale: 1.05 }}className="signup-button-table">
					<div className="signup-button-table-content">
						<p className="signup-button-table-text">Sign Up</p>
						<img
							src={Signup}
							alt="signup-button"
							className="signup-button-table-img"
						/>
					</div>
				</motion.div>
			</div>
			{tabSelected===1 && <motion.div className="table-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
				<table className="styled-table">
					<thead>
						<tr className="table-header">
							{/* <div className="table-header"> */}
							<th></th>
							<th>Rank</th>
							<th>Name</th>
							<th>Statement</th>
							{/* </div> */}
						</tr>
					</thead>
					<tbody>
						<SignupRow
							row="1"
							name="Jason"
							rank="Iron III"
							statement="hello i am the best dottore is hot"
						/>
						<SignupRow
							row="2"
							name="Jason"
							rank="Iron III"
							statement="hello i am the best dottore is hot"
						/>
					</tbody>
				</table>
			</motion.div>}
            {tabSelected === 2 && <motion.div className="table-container" initial={{opacity: 0}} animate={{opacity: 1}}> 
            <table className="styled-table">
                <thead>
                    <tr className="table-header">
                        <th></th>
                        <th>Name</th>
                        <th>Captain</th>
                        <th>Record</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamsRow 
                        row="1"
                        team="Dottoresimps666"
                        captain="London"
                        record="1-1"
                    />
                </tbody>
            </table>
            </motion.div>}
            {tabSelected === 3 && <motion.div className="table-container" initial={{opacity: 0}} animate={{opacity: 1}}>
            <table className="styled-table">
                <thead>
                    <tr className="table-header">
                        <th className="hometeam week-title">Week 0</th>
                        <th className="awayteam"></th>
                    </tr>
                </thead>
                <tbody>
                    <MatchupsRow 
                        hometeam="home" 
                        awayteam="away" 
                    />
                </tbody>
            </table>

            </motion.div>}
		</div>
	);
}
