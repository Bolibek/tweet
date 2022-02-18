export default function Navbar() {
	return (
		<nav className="nav-wrapper header__nav">
			<a href="#" className="brand-logo left">
				React
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<a href="#">Twitter</a>
				</li>
			</ul>
		</nav>
	);
}
