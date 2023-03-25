import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SignupDone() {
	return (
		<>
			<Navbar />
			<div className="signup-complete-container">
				<p className="signupdone-title">Thanks for signing up!</p>
				<p className="signupdone-text">
					Make sure to join us on discord for
					further instructions at <a className="discord" href="https://discord.gg/NKbdZxMEXd">
						https://discord.gg/NKbdZxMEXd
					</a>
				</p>
			</div>
			<Footer />
		</>
	);
}
