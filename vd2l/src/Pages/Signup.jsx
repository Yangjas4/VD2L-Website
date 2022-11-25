import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Inhouse() {
	const signupsOpen = false;

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
