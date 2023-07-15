import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function ButtonExit() {
	return (
		<Box
			sx={{
				position: 'fixed',
				display: 'flex',
				justifyContent: 'flex-end',
				bottom: '0',
				right: '0',
				margin: '20px',
			}}
		>
			<Fab color="primary" aria-label="add">
				<ExitToAppTwoToneIcon />
			</Fab>
		</Box>
	);
}
