import { ExternalLink } from "react-external-link"


export function Projects() {

    return (
        <>
        <h1>Projects Page</h1>
        <ul>
            <li>First Project : Inventory List(React Project) </li>
            <ExternalLink href="https://github.com/serteri/inventoryList"></ExternalLink>
            <li>Second Project : Rental Management(Database application-Flask project) </li>
            <ExternalLink href="https://github.com/serteri/rental_management"></ExternalLink>
            <li>Third Project : Guess Number Game(Python Project) </li>
            <ExternalLink href="https://github.com/serteri/Guess_number"></ExternalLink>
            <li>Fourth Project : Currency Conventer(React Project) </li>
            <ExternalLink href="https://github.com/serteri/currencyConverter"></ExternalLink>
            <li>Fifth Project :Math Game(Javascript Project) </li>
            <ExternalLink href="https://github.com/serteri/SEC-Math-Game"></ExternalLink>
            <li>Sixth Project :Todo Project(Javascript Project) </li>
            <ExternalLink href="https://github.com/serteri/todo"></ExternalLink>

        </ul>
        </>
        
    )
}