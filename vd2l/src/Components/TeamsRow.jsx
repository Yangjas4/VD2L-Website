export default function TeamsRow(props) {
	return (
		<tr>
			<td className="small-row">{props.row}</td>
			<td className="big-row">{props.team}<img src={props.logo} className="teamLogo"/></td>
			<td className="med-row">{props.captain}</td>
			<td className="record">{props.record}</td>
		</tr>
	);
}
