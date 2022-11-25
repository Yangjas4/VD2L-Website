import { useState } from "react"
import { motion } from "framer-motion";

export default function Admin() {

    const [generatedMessage, setGeneratedMessage] = useState(false);
    const handleGenerate = () => {
        if (generatedMessage === false) {
            setGeneratedMessage(true);
        }
    }

    return (
        <div className="admin-container">
            <motion.div className="generate-matchups" onClick={handleGenerate} whileHover={{scale: 1.1}}>
                <p>generate matchups</p>
            </motion.div>
            {generatedMessage && <motion.p className="matchups-generated-confirmation" initial={{opacity: 0}} animate={{opacity: 1}}>new matchups have been generated</motion.p>}
        </div>
    )
}