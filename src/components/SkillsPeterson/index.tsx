import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import ButtonExit from '../ButtonExit';

export default function SoftSkillsPeterson() {
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
					<Typography variant="h4">Peterson - SOFT SKILLS</Typography>
				</Grid>
				<Grid item xs={12}>
					<Accordion>
						<AccordionSummary>
							<Typography>Criatividade</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Consigo lidar com problemas de forma criativa e
								também gosto de usar essa habilidade para evitar
								o tédio.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography>Motivação e Positividade</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								De alguma forma, sempre tento motivar as pessoas
								que estão comigo e trazer positivade aonde
								trabalho.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography>Liderança e Gestão</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Não gosto de me identificar como um líder
								"supremo/todo poderoso" nem nada assim, mas
								acredito que eu tenha uma certa habilidade de
								liderança.
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
