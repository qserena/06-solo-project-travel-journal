import locationIcon from './assets/location-icon.svg'

export default function Card({ item, imageDirectory } = props) {
	imageDirectory = ``
	const image = `${imageDirectory}${item.image}`
	const dateText = `${item.startDate} - ${item.endDate}`
	return (
		<div>
			<div className="card">
				<img
					className="card--img"
					src={`${imageDirectory}${item.image}`}
					alt={`Image of ${item.title}`}
				/>
				<img
					className="card--img-landscape"
					src={`${imageDirectory}landscape-${item.image}`}
					alt={`Image of ${item.title}`}
				/>
				<div className="card--info-container">
					<div className="card--location-row">
						<img src={locationIcon} alt="Loaction icon" />
						<p className="card--location">{item.location}</p>
						<a
							className="card--location-link"
							href={item.googleMapsUrl}
						>
							View on Google Maps
						</a>
					</div>
					<h1>{item.title}</h1>
					<h3 className="card--date-text">{dateText}</h3>
					<p className="card--description">{item.description}</p>
				</div>
			</div>
			<hr />
		</div>
	)
}
