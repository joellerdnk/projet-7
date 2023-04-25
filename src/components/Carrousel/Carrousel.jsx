import { useState } from "react"
import left from "../../assets/images/vector-left.svg"
import right from "../../assets/images/vector-right.svg"

export default function Carrousel({ slides }) {
	// Définir l'index du premier slide à 0
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		// On repart au premier slide quand on arrive au dernier
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const prevSlide = () => {
		// On repart au dernier slide quand on est au premier
		setCurrent(current === 0 ? length - 1 : current - 1)
	}


	return (
		<section id="carrousel-container">
			{/* S'il y a plus d'une image, affichage des flèches */}
			{length > 1 && (
				<img
					src={left}
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}

			{slides.map((slide, index) => (
				<div
					key={index}
					className={
						index === current
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="appartement à louer" />}
					
					{/* S'il y a plus d'une image, affichage du compteur */}
					{length > 1 &&  (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	)
} 