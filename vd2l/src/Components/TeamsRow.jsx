export default function SignupRow(props) {
	return (
		<tr>
			<td>{props.row}</td>
			<td>{props.team}</td>
			<td className="record">{props.captain}</td>
			<td className="record">{props.record}</td>
		</tr>
	);
}
