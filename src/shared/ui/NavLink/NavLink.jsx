export default function NavLink({ text, className }) {
	return (
		<a className={className} href='#'>
			{text}
		</a>
	);
}
