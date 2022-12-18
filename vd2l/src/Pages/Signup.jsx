import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { isOpenDocRef } from "../firebase";
import { getDocs } from "firebase/firestore";
import { useFormik } from "formik";

export default function Inhouse() {
	const [isLoading, setIsLoading] = useState(true);
	const [signupsOpen, setSignupsOpen] = useState(true);
	const formik = useFormik({
		initialValues: {
			ign: "",
			captain: 1,
			statement: "",
			controller: 5,
			duelist: 5,
			sentinal: 5,
			initiator: 5,
			tracker: "",
			rank: 0,
		}
	});

	// let signupObj

	// useEffect(() => {
	// 	getDocs(isOpenDocRef)
	// 	.then(snapshot => {
	// 		signupObj = snapshot.docs.map(doc => {
	// 			return {
	// 				...doc.data()
	// 			}
	// 		})
    //         setSignupsOpen(signupObj[0].isOpen);
    //         console.log(signupsOpen);
	// 		setIsLoading(false);
	// 	})
	// 	.catch(err => {
	// 		console.log(`%cError: ${err.message}`, "color:red");
	// 	})
	// }, []);

	return (
		<div className="inhouse">
			<Navbar />
			{signupsOpen ? (
				<>
					<h1 className="season-title">Signups for Season 0</h1>
					<form>
						<div className="left-form">
							<label for="ign">IGN</label>
							<input 
								type="text" 
								id="ign"
								name="ign"
								placeholder="Bob#NA1"
								onChange={formik.handleChange}
								value={formik.values.ign}
							/>
							<label>Sign up as Captain? (Player Drafter)</label>
							<input type="radio" id="yesCapt" name="captain" value="Yes"/>
							<label for="yesCapt">Yes</label>
							<input type="radio" id="noCapt" name="captain" value="No"/>
							<label for="noCapt">No</label>
							<input type="radio" id="maybeCapt" name="captain" value="Maybe"/>
							<label for="maybeCapt">Maybe</label>
							
							<label for="statement">Player Statement</label>
							<textarea name="statement" id="statement" value={formik.values.statement} onChange={formik.handleChange}></textarea>
						</div>
						<div className="right-form">
							<label>Role Preferences (5 means most comfortable)</label>
							<input type="radio" id="yesCapt" name="captain" value="Yes"/>
							<label for="yesCapt">Yes</label>
							<input type="radio" id="noCapt" name="captain" value="No"/>
							<label for="noCapt">No</label>
							<input type="radio" id="maybeCapt" name="captain" value="Maybe"/>
							<label for="maybeCapt">Maybe</label>

							
							<label for="tracker">Tracker.gg Link</label>
							<input 
								type="text"
								id="tracker"
								name="tracker"
								placedholder="https://tracker.gg/valorant/profile/riot/bob%213i09NA1" 
								onChange={formik.handleChange}
								value={formik.values.tracker}
							/>

							<label for="rank">Current Rank</label>
							<select name="rank" id="rank">
								<option value="Iron I">Iron 1</option>
								<option value="Iron II">Iron 2</option>
								<option value="Iron III">Iron 3</option>
								<option value="Bronze I">Bronze 1</option>
								<option value="Bronze II">Bronze 2</option>
								<option value="Bronze III">Bronze 3</option>
								<option value="Silver I">Silver 1</option>
								<option value="Silver II">Silver 2</option>
								<option value="Silver III">Silver 3</option>
								<option value="Gold I">Gold 1</option>
								<option value="Gold II">Gold 2</option>
								<option value="Gold III">Gold 3</option>
								<option value="Plat I">Plat 1</option>
								<option value="Plat II">Plat 2</option>
								<option value="Plat III">Plat 3</option>
								<option value="Diamond I">Diamond 1</option>
								<option value="Diamond II">Diamond 2</option>
								<option value="Diamond III">Diamond 3</option>
							</select>

						</div>
					</form>
				</>
			) : (
				<>
					<div className="signups-closed-container">
						<p className="signups-closed">
							Signups Are Currently Closed!
							
						</p>
					</div>
					<div className="discord-container">
                        <p className="join-discord">Join us on Discord to find out when signups for next season open! <br /><a className="discord" href="https://discord.gg/NKbdZxMEXd">
						https://discord.gg/NKbdZxMEXd
					</a></p>
                    </div>
				</>
			)}
			<Footer />
		</div>
	);
}
