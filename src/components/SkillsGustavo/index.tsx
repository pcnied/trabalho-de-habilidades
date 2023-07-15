import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import ButtonExit from '../ButtonExit';

export default function SoftSkillsGustavo() {
	return (
		<>
			<Grid container>
				<Grid
					item
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					xs={12}
				>
					<Typography variant="h4">Gustavo - SOFT SKILLS</Typography>
				</Grid>
				<Grid item xs={12}>
					<Accordion>
						<AccordionSummary>
							<Typography>Comunicação assertiva</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Consigo interagir e expressar minhas ideias em
								qualquer grupo de pessoas que eu esteja.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography>Empatia</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Me coloco no lugar das pessoas no momento de
								tomada de decisões.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography>Resiliência</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Consigo me adaptar às situações diversas e lidar
								com meus problemas.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
			<Link to="/">
				<ButtonExit />
			</Link>
		</>
	);
}
