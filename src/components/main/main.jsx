import React from "react"
import data from "../../data"
import Section from "../section/section"
import "./main.scss"

export default function Main() {
  const sections = data.sections.map((section) => (
	<Section key={section.name} {...section}></Section>
	))
	return (
		<main className='main-info'>
			<h1 className='stripe-after'>{data.name}</h1>
			<div className='contact-info text-center'>
				<p className='mb-0'>Address: {data.address}</p>
				<div className='phone'>
					Phone: <a href={`tel:${data.phone}`}>{data.phone}</a>
				</div>
				<div className='email'>
					Email: <a href={`mailto:${data.email}`}> {data.email}</a>
				</div>
			</div>
			<div className='sections'>
				{sections}
			</div>
		</main>
	)
}
