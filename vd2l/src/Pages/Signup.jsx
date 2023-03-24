import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { isOpenDocRef } from "../firebase";
import { getDocs, setDoc, doc } from "firebase/firestore";
import { useFormik, Field } from "formik";
import { motion } from "framer-motion";
import { db } from "../firebase";

export default function Inhouse() {
	const [isLoading, setIsLoading] = useState(true);
	const [signupsOpen, setSignupsOpen] = useState(null);
	const formik = useFormik({
		initialValues: {
			ign: "",
			captain: "Yes",
			statement: "",
			controller: 5,
			duelist: 5,
			sentinel: 5,
			initiator: 5,
			tracker: "",
			rank: 0,
		},
		onSubmit: values => {
			
			setDoc(doc(db, "signups", values.ign), values) 
			.then( () => {
				location.replace("/signupDone");
            })
            .catch(error => {
                console.log(error);
            })
		}
	});

	let signupObj

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
			setIsLoading(false);
		})
		.catch(err => {
			console.log(`%cError: ${err.message}`, "color:red");
		})
	}, []);

	return (
		<div className="inhouse">
			<Navbar />
			{signupsOpen ? (
				<div className="signup-content">
					<h1 className="season-title">Signup for Season 0</h1>
					<form onSubmit={formik.handleSubmit}>
						<div className="signup-form">
							<div className="left-form">
								<label for="ign">IGN (exp bob#NA1)</label>
								<input
									type="text"
									id="ign"
									name="ign"
									placeholder="Bob#NA1"
									onChange={formik.handleChange}
									value={formik.values.ign}
									required
								/>
								<label>
									Sign up as Captain? (Player Drafter)
								</label>
								<div className="capt-container">
									<div className="capt-inputs">
										<input
											type="radio"
											id="yesCapt"
											name="captain"
											value="Yes"
											onChange={formik.handleChange}
											required
										/>
										<input
											type="radio"
											id="noCapt"
											name="captain"
											value="No"
											onChange={formik.handleChange}
											required
										/>
										<input
											type="radio"
											id="maybeCapt"
											name="captain"
											onChange={formik.handleChange}
											value="Maybe"
											required
										/>
									</div>
									<div className="capt-labels">
										<label for="yesCapt">Yes</label>
										<label for="noCapt">No</label>
										<label for="maybeCapt">Maybe</label>
									</div>
								</div>

								<label for="statement" id="statement">
									Player Statement
								</label>
								<textarea
									name="statement"
									id="statement"
									placeholder="Write a short message about yourself"
									value={formik.values.statement}
									onChange={formik.handleChange}
								></textarea>
							</div>
							<div className="right-form">
								<label>
									Role Preferences (5 means most comfortable)
								</label>
								<div className="roles-labels">
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div>4</div>
									<div>5</div>
								</div>
								<div className="roles-container">
									<div className="roles">
										<div>Duelist</div>
										<div>Controller</div>
										<div>Sentinel</div>
										<div>Initiator</div>
									</div>
									<div className="roles-radio">
										<div className="radios">
											<input
												type="radio"
												id="1duel"
												name="duelist"
												value="1"
												onChange={formik.handleChange}
												required
											/>
											<input
												type="radio"
												id="2duel"
												name="duelist"
												value="2"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="3duel"
												name="duelist"
												value="3"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="4duel"
												name="duelist"
												value="4"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="5duel"
												name="duelist"
												value="5"
												onChange={formik.handleChange}
											/>
										</div>
										<div className="radios">
											<input
												type="radio"
												id="1cont"
												name="controller"
												value="1"
												onChange={formik.handleChange}
												required
											/>
											<input
												type="radio"
												id="2cont"
												name="controller"
												value="2"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="3cont"
												name="controller"
												value="3"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="4cont"
												name="controller"
												value="4"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="5cont"
												name="controller"
												value="5"
												onChange={formik.handleChange}
											/>
										</div>
										<div className="radios">
											<input
												type="radio"
												id="1sent"
												name="sentinel"
												value="1"
												onChange={formik.handleChange}
												required
											/>
											<input
												type="radio"
												id="2sent"
												name="sentinel"
												value="2"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="3sent"
												name="sentinel"
												value="3"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="4sent"
												name="sentinel"
												value="4"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="5sent"
												name="sentinel"
												value="5"
												onChange={formik.handleChange}
											/>
										</div>
										<div className="radios">
											<input
												type="radio"
												id="1init"
												name="initiator"
												value="1"
												onChange={formik.handleChange}
												required
											/>
											<input
												type="radio"
												id="2init"
												name="initiator"
												value="2"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="3init"
												name="initiator"
												value="3"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="4init"
												name="initiator"
												value="4"
												onChange={formik.handleChange}
											/>
											<input
												type="radio"
												id="5init"
												name="initiator"
												value="5"
												onChange={formik.handleChange}
											/>
										</div>
									</div>
								</div>

								<label for="tracker">Tracker.gg Link</label>
								<input
									type="text"
									id="tracker"
									name="tracker"
									placedholder="https://tracker.gg/valorant/profile/riot/bob%213i09NA1"
									onChange={formik.handleChange}
									value={formik.values.tracker}
									required
								/>

								<label for="rank" id="current-rank-label">
									Current Rank
								</label>
								<select name="rank" id="rank" onChange={formik.handleChange}>
									<option value="1">Iron 1</option>
									<option value="2">Iron 2</option>
									<option value="3">Iron 3</option>
									<option value="4">Bronze 1</option>
									<option value="5">Bronze 2</option>
									<option value="6">Bronze 3</option>
									<option value="7">Silver 1</option>
									<option value="8">Silver 2</option>
									<option value="9">Silver 3</option>
									<option value="10">Gold 1</option>
									<option value="11">Gold 2</option>
									<option value="12">Gold 3</option>
									<option value="13">Plat 1</option>
									<option value="14">Plat 2</option>
									<option value="15">Plat 3</option>
								</select>
							</div>
						</div>
						<motion.button
							type="submit"
							id="submit-signup"
							whileHover={{ scale: 1.05 }}
						>
							Submit
						</motion.button>
					</form>
				</div>
			) : (
				<>
					<div className="signups-closed-container">
						<p className="signups-closed">
							Signups Are Currently Closed!
						</p>
					</div>
					<div className="discord-container">
						<p className="join-discord">
							Join us on Discord to find out when signups for next
							season open! <br />
							<a
								className="discord"
								href="https://discord.gg/NKbdZxMEXd"
							>
								https://discord.gg/NKbdZxMEXd
							</a>
						</p>
					</div>
				</>
			)}
			<Footer />
		</div>
	);
}
