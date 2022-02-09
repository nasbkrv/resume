import React from "react"
import "./section.scss"
import Badge from "react-bootstrap/Badge"

export default function Section({ name, data }) {
	return (
		<div className='section'>
			<h2 className='section-title stripe-after'>{name}</h2>
			<div className='sub-section'>
				{name === "education" || name === "courses"
					? data.map((entry) => (
							<div key={entry.school}>
								<h4>{entry.school}</h4>
								<h6 className='ps-2'>{entry.degree}</h6>
							</div>
					  ))
					: ""}
				{name === "experience"
					? data.map((entry, id) => (
							<div key={id} className='pt-2'>
								<h4 className='mt-3'>{entry.position}</h4>

								<div className='d-block d-lg-flex'>
									<h5 className='mx-2'>{entry.company}</h5>
									<p className='mx-2'>{`( ${entry.start} - ${entry.end})`}</p>
								</div>

								<ul>
									{entry.bullets.map((bullet, id) => (
										<li key={id}>{bullet}</li>
									))}
								</ul>
							</div>
					  ))
					: ""}
				{name === "skills"
					? data.map((entry, id) => (
							<div key={id} className='pt-2'>
								<h4 className='mt-3'>{entry.type.toUpperCase()}</h4>
								<div>
									{entry.skills.map((skill, id) => (
										<Badge
											pill
											bg='warning'
											text='dark'
											key={id}
											style={{
												fontSize: 18,
												margin: "5px 10px",
												whiteSpace: "normal"
											}}>
											{skill}
										</Badge>
									))}
								</div>
							</div>
					  ))
					: ""}
			</div>
		</div>
	)
}
