import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Rules() {

    return (
        <div className="rules">
            <Navbar />
            <p className="season-no">
                section 1, teams and draft :
                ============================

                -teams will consist of 4 players from the draft and 1 captain.

                -the draft pool will be the first (number of captains) * 4 players to signup.

                -captains will select in ascending avg team rank, updated after each round. 

                -there will be no trades or transfers after the draft is complete

                -if a palyer leaves a team, a suitable replacement player will be found and 
                confirmed by the admins. captains, if a players leaves your team, reach out to 
                the admins.

                -players leaving teams will be banned for a commensurate ammount of seasons


                section 2, lobby and game rules : 
                =================================

                -matches default time will be wednesday at 8pm est.

                -captains should communicate before the match starts about lobby creation.

                -if the game cannot be played then, captains may reschedule that weeks game.
                 
                - on the website, flip a coin, the winning team makes a selection, and then
                the losing team makes a selection

                /************************
                you can pick to be either team in this scenario;
                team a bans
                team b bans
                team a picks
                team b picks

                you can pick to have your map selection be played first or second
                ************************/

                -after the series has been played, both captains submit results in the discord
            </p>
            <Footer />
        </div>
    )
}