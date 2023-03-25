import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Rules() {
	return (
		<>
			<Navbar />
			<div className="rules">
				<h1 className="rules-title"> League Rules </h1>
				<h3>Section 1. teams and draft:</h3>
				<li>
					teams will consist of 4 players from the draft and 1
					captain.
				</li>
				<li>
					the draft pool will be the first (number of captains) * 4
					players to signup.
				</li>
				<li>
					captains will select in ascending avg team rank, updated
					after each round.
				</li>
				<li>
					there will be no trades or transfers after the draft is
					complete
				</li>
				<li>
					{" "}
					if a palyer leaves a team, a suitable replacement player
					will be found and confirmed by the admins. captains, if a
					players leaves your team, reach out to the admins.
				</li>
				<li>
					players leaving teams will be banned for a commensurate
					ammount of seasons
				</li>
                <h3>Section 2. lobby and game rules:</h3>
                <li>matches default time will be
				wednesday at 8pm est.</li>
                <li>captains should communicate before the match starts about lobby creation.</li>
                <li>if the game cannot be played
				then, captains may reschedule that weeks game.</li>
                <li>on the website,
				flip a coin, the winning team makes a selection, and then the
				losing team makes a selection: you can
				pick to be either team in this scenario; team a bans team b bans
				team a picks team b picks you can pick to have your map
				selection be played first or second</li>
                <li>after the series has been played, both captains submit results
				in the discord</li>
                <li>if a team cannot field 5 players 20 minutes after the scheduled gametime, a forfeit can be issued under the opposing captain's discretion</li>

                <h3>Section 3. Substitute Policy</h3>
                <li>Each team can only use a maximum of two substitutes per week for missing players. Substitutes must be of equal or lower rank to the rank their corresponding players were when they signed up (which is recorded on the website) and approved by the opposing captain. Admins can also approve a substitute if deemed necessary. If teams cannot field a substitute for a missing player, they must forfeit the match.</li>
			</div>

			<Footer />
		</>
	);
}
