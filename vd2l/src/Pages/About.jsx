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
					VD2L is a recreational Valorant league aimed for players
					around low to midskill level (from iron to diamond) to give
					players an oppourtunity to play in a more competitive
					setting as well as to foster a community of low to mid skill
					Valorant players who can look to improve together with
					guidance from players of higher skill!
				</p>
				<p className="about-paragraph-two">
					This league is targeted towards North American players in
					the North American servers but feel free to join from other
					regions if your ping allows for it!
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
