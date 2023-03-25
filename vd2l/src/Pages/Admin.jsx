import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import { isOpenDocRef, isOpenRef } from "../firebase";
import { getDocs, updateDoc } from "firebase/firestore";
export default function Admin() {

    let newStatus;
    let signupObj;
    let signupStatus;
    const [generatedMessage, setGeneratedMessage] = useState(false);
    const handleGenerate = () => {
        if (generatedMessage === false) {
            setGeneratedMessage(true);
        }
        const twoPerRound = require('swiss-pairing')({maxPerRound: 2})
    }

    useEffect(() => {
		getDocs(isOpenDocRef)
		.then(snapshot => {
			signupObj = snapshot.docs.map(doc => {
				return {
					...doc.data()
				}
			})
            signupStatus = signupObj[0].isOpen;
            console.log(signupStatus);
		})
		.catch(err => {
			console.log(`%cError: ${err.message}`, "color:red");
		})
	}, []);

    const handleSignups = () => {
        if (signupStatus) {
            newStatus = {
                isOpen: false
            };
            updateDoc(isOpenRef, newStatus)
            .then(isOpenRef => {
                console.log("Status of Signups Field has been updated");
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            newStatus = {
                isOpen: true
            };
            updateDoc(isOpenRef, newStatus)
            .then(isOpenRef => {
                console.log("Value of an Existing Document Field has been updated");
            })
            .catch(error => {
                console.log(error);
            })
        }
    }


    return (
        <div className="admin-container">
            <motion.div className="generate-matchups" whileHover={{scale: 1.1}} onClick={handleSignups}>
                <p>toggle signups</p>
            </motion.div>
            <motion.div className="generate-matchups" onClick={handleGenerate} whileHover={{scale: 1.1}}>
                <p>generate matchups</p>
            </motion.div>
            {generatedMessage && <motion.p className="matchups-generated-confirmation" initial={{opacity: 0}} animate={{opacity: 1}}>new matchups have been generated</motion.p>}
        </div>
    )
}