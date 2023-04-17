import { useState, useRef, useEffect } from "react"
import Chevron from "../../assets/images/vector-down.svg"

export default function Collapse(props) {
	// Définir le state du toggle (et false par défaut)
	const [toggle, setToggle] = useState(false)
	const [heightEl, setHeightEl] = useState()

	const toggleState = () => {
		// Définir la fonction toggleState qui modifie la valeur toggle au clic
		setToggle(!toggle)
	}
	// Récupération et conservation de la valeur de hauteur du collapse déplié
	const refHeight = useRef()

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`)
	}, [])

	return (
		// Affichage le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	)
}