export default function SignupRow(props) {

	return (
		<tr>
			<td>{props.row}</td>
			<td>{props.rank}</td>
			<td>{props.name}</td>
			<td className="statement">{props.statement}</td>
		</tr>
	);
}
