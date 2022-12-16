import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { isOpenDocRef } from "../firebase";
import { getDocs } from "firebase/firestore";

export default function Inhouse() {
	const [isLoading, setIsLoading] = useState(true);
	const [signupsOpen, setSignupsOpen] = useState(false);
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
				<p className="season-no">Signups Are Currently Open!</p>
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
