import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import ButtonExit from '../ButtonExit';

export default function SoftSkillsHenrique() {
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
					<Typography variant="h4">Henrique - SOFT SKILLS</Typography>
				</Grid>
				<Grid item xs={12}>
					<Accordion>
						<AccordionSummary>
							<Typography>Proatividade</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Me coloco a disposição para ajudar no que for
								necessário. Não consigo ficar parado, quero
								sempre fazer algo e direciono isso para ajudar
								onde precisa.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography>Planejamento</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Analiso todo o processo ou situação e planejo a
								forma mais eficiente naquele momento e
								circunstância para tirar o melhor proveito.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography>Tranquilidade</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Calmo perante situações de pressão e tranquilo
								para planejar os melhores métodos para alcançar
								o objetivo.
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
