import React from "react"
import profilePhoto from "../../images/profile.png"
import "./persona.scss"
import data from "../../data"
import ProgressBar from "react-bootstrap/ProgressBar"

export default function Personal() {
	return (
		<section className='side-info'>
			<div className='img-wrap'>
				<img src={profilePhoto} alt='Avatar' />
			</div>
			<div className='info'>
				<h2>About me</h2>
				<p className='px-5 text-center'>{data.shortDescription}</p>
				<h2>Nationality</h2>
				<h4 className='px-5 text-center'>{data.nationality}</h4>
				<h2>Languages</h2>
				{data.languages.map((lang) => (
					<div className="language" key={lang.name}>
						<h4 className='text-center'>{lang.name}</h4>
						<ProgressBar variant='warning' className="lang-level" now={lang.level * 20} />
					</div>
				))}
			</div>
		</section>
	)
}
