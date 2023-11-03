import logo from './assets/logo.svg'

export default function Navbar() {
	return (
		<nav>
			<div className="nav--container">
				<img src={logo} alt="Logo" />
				<p className="nav--site-name">my travel journal.</p>
			</div>
		</nav>
	)
}
