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
import { getDocs } from "firebase/firestore";
import { signupsRef, teamsRef } from "../firebase";

export default function Season() {
	let fluke = 0;
	let dylan = 1;
	let potatoes = 2;
	let ethn = 3;
	let mack = 4;
	let issac = 6;
	let mazi = 7;
	let crim = 5;
	let playerData;
	let teamsData;
	const [tabSelected, setTabSelected] = useState(1);
	const [players, setPlayers] = useState([]);
	const [teams, setTeams] = useState([]);
	const [teamInfo, setTeamInfo] = useState([]);
	const ranks = [
		"Iron I",
		"Iron II",
		"Iron III",
		"Bronze I",
		"Bronze II",
		"Bronze III",
		"Silver I",
		"Silver II",
		"Silver III",
		"Gold I",
		"Gold II",
		"Gold III",
		"Platinum I",
		"Platinum II",
		"Platinum III",
		"Diamond I",
		"Diamond II",
		"Diamond III",
	];
	useEffect(() => {
		getDocs(signupsRef)
			.then((snapshot) => {
				playerData = snapshot.docs.map((doc) => {
					return {
						...doc.data(),
					};
				});
				setPlayers(
					playerData.map((player, index) => (
						<SignupRow
							key={index}
							row={index + 1}
							name={player.ign}
							rank={ranks[player.rank - 1]}
							statement={player.statement}
						/>
					))
				);
			})
			.catch((err) => {
				console.log(`%cError: ${err.message}`, "color:red");
			});

		getDocs(teamsRef)
			.then((snapshot) => {
				teamsData = snapshot.docs.map((doc) => {
					return {
						...doc.data(),
					};
				});
				setTeamInfo(teamsData);
				const sortedTeamsData = teamsData.sort(
					(a, b) => b.wins - a.wins
				);
				setTeams(
					sortedTeamsData.map((team, index) => (
						<TeamsRow
							key={index}
							row={index + 1}
							team={team.name}
							record={`${team.wins} - ${team.losses}`}
							captain={team.captain}
							logo={team.logo}
						/>
					))
				);
				console.log(teamsData);
			})
			.catch((err) => {
				console.log(`%cError: ${err.message}`, "color:red");
			});
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
						<tbody>{players}</tbody>
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
								<th>Record ( W - L )</th>
							</tr>
						</thead>
						<tbody>{teams}</tbody>
					</table>
				</motion.div>
			)}
			{tabSelected === 3 && (
				<motion.div
					className="table-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 1</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
								<td className="score">2 - 0</td>
								<td className="awayteam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
								<td className="score">1 - 1</td>
								<td className="awayteam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table>
					
					
					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 2</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
								<td className="score">1 - 1</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table>

					
					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 3</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">2 - 0</td>
								<td className="awayteam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
								<td className="score">2 - 0</td>
								<td className="awayteam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table>

					
					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 4</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
								<td className="score">1 - 1</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">2 - 0</td>
								<td className="awayteam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
								<td className="score">2 - 0</td>
								<td className="awayteam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table>

					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 5</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
								<td className="score">1 - 1</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
								<td className="score">0 - 2</td>
								<td className="awayteam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
								<td className="score">2 - 0</td>
								<td className="awayteam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table>


					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 6</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table>
					
					{/*------------------------------------------ WEEK 7 ---------------------------------------------------------------------}
					<table className="styled-table matchup">
						<thead>
							<tr className="table-header">
								<th className="hometeam week-title">Week 7</th>
								<th className="score">Score</th>
								<th className="awayteam"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="hometeam">
									{teamInfo[mack].name +
										" (" +
										teamInfo[mack].wins +
										" - " +
										teamInfo[mack].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[mazi].name +
										" (" +
										teamInfo[mazi].wins +
										" - " +
										teamInfo[mazi].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[dylan].name +
										" (" +
										teamInfo[dylan].wins +
										" - " +
										teamInfo[dylan].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[potatoes].name +
										" (" +
										teamInfo[potatoes].wins +
										" - " +
										teamInfo[potatoes].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[issac].name +
										" (" +
										teamInfo[issac].wins +
										" - " +
										teamInfo[issac].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[fluke].name +
										" (" +
										teamInfo[fluke].wins +
										" - " +
										teamInfo[fluke].losses +
										")"}
								</td>
							</tr>
							<tr>
								<td className="hometeam">
									{teamInfo[crim].name +
										" (" +
										teamInfo[crim].wins +
										" - " +
										teamInfo[crim].losses +
										")"}
								</td>
								<td className="score">0 - 0</td>
								<td className="awayteam">
									{teamInfo[ethn].name +
										" (" +
										teamInfo[ethn].wins +
										" - " +
										teamInfo[ethn].losses +
										")"}
								</td>
							</tr>
						</tbody>
					</table> */}
				</motion.div>
			)}
		</div>
	);
}
