import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Gaming from "../assets/Gaming.png";

export default function About() {
	return (
		<div className="about">
			<img src={Gaming} alt="Gaming Keyboard Image" className="gaming" />
			<Navbar />
			<div className="about-container">
				<h1 className="about-title">About VD2L!</h1>
				<p className="about-paragraph-one">
				VD2L is a recreational Valorant league aimed at players of low to mid-skill levels, 
				from Iron to Diamond. Our goal is to provide a competitive environment for players to 
				improve their skill while learning and having fun at the same time. 
				</p>
				<p className="about-paragraph-two">
				Our league is open to players from North America and other regions, provided they can maintain a stable connection. 
				</p>
				<p className="about-paragraph-three">
					Our primary method of communication is through Discord. We
					maintain a friendly and welcoming community where you can
					chat and make friends with your fellow players as well as
					play inhouses!
				</p>
				<p className="about-paragraph-four">
					Join Us On Discord :D{" "}
					<a className="discord" href="https://discord.gg/NKbdZxMEXd">
						https://discord.gg/NKbdZxMEXd
					</a>
				</p>
			</div>

			<Footer />
		</div>
	);
}
