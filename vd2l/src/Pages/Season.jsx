import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SignupRow from "../Components/SignupRow";
import TeamsRow from "../Components/TeamsRow";
import MatchupsRow from "../Components/MatchupsRow";
import Signup from "../assets/Signup.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { getDocs } from 'firebase/firestore';
import { signupsRef, teamsRef } from '../firebase';

export default function Season() {
	
	let playerData;
	let teamsData;
	const [tabSelected, setTabSelected] = useState(1);
	const [players, setPlayers] = useState([]);
	const [teams, setTeams] = useState([]);
	const ranks = ["Iron I", "Iron II", "Iron III", "Bronze I", "Bronze II", "Bronze III", "Silver I", "Silver II", "Silver III", "Gold I", "Gold II", "Gold III", "Platinum I", "Platinum II", "Platinum III", "Diamond I", "Diamond II", "Diamond III"];
	useEffect(() => {

		getDocs(signupsRef)
		.then(snapshot => {
			playerData = snapshot.docs.map(doc => {
				return {
					...doc.data()
				}
			})
			setPlayers(playerData.map((player, index) => <SignupRow key={index} row={index+1} name={player.ign} rank={ranks[player.rank-1]} statement={player.statement}/>))
		})
		.catch(err => {
			console.log(`%cError: ${err.message}`, "color:red");
		})


		getDocs(teamsRef)
		.then(snapshot => {
			teamsData = snapshot.docs.map(doc => {
				return {
					...doc.data()
				}
			})
			const sortedTeamsData = teamsData.sort((a, b) => b.wins - a.wins);
			setTeams(sortedTeamsData.map((team, index) => <TeamsRow key={index} row={index+1} team={team.name} record={`${team.wins} - ${team.losses}`} captain={team.captain}/>))
		})
		.catch(err => {
			console.log(`%cError: ${err.message}`, "color:red");
		})

	}, []);

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
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="signup-button-table"
				>
					<Link to="/signup">
						<div className="signup-button-table-content">
							<p className="signup-button-table-text">Sign Up</p>
							<img
								src={Signup}
								alt="signup-button"
								className="signup-button-table-img"
							/>
						</div>
					</Link>
				</motion.div>
			</div>
			{tabSelected === 1 && (
				<motion.div
					className="table-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
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
							{players}
						</tbody>
					</table>
				</motion.div>
			)}
			{tabSelected === 2 && (
				<motion.div
					className="table-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
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
							{teams}
						</tbody>
					</table>
				</motion.div>
			)}
			{tabSelected === 3 && (
				<motion.div
					className="table-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<table className="styled-table">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 0</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<MatchupsRow hometeam = "hi" awayteam="bye"/>
						</tbody>
					</table>
				</motion.div>
			)}
		</div>
	);
}
