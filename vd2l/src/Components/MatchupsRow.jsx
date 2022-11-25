export default function MatchupsRow(props) {
	return (
		<tr>
            <td className="hometeam">{props.hometeam}</td>
			<td className="awayteam">{props.awayteam}</td>
		</tr>
	);
}
