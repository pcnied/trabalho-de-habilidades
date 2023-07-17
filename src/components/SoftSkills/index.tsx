import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function SoftSkills() {
	return (
		<>
			<Grid container>
				<Grid
					xs={12}
					item
					display={'flex'}
					padding={2}
					justifyContent={'center'}
				>
					<Typography
						borderRadius={'10px'}
						padding={2}
						color={'white'}
						bgcolor={'#070E64'}
						variant="h4"
					>
						Trabalho de Habilidades
					</Typography>
				</Grid>
			</Grid>
			<Grid container>
				<Grid
					xs={12}
					item
					display={'flex'}
					padding={2}
					justifyContent={'center'}
				>
					<Link to={'/skillsPeterson'}>
						<Button
							sx={{ textDecoration: 'none' }}
							variant="outlined"
						>
							{' '}
							Peterson
						</Button>
					</Link>
				</Grid>
				<Grid
					xs={12}
					item
					display={'flex'}
					padding={2}
					justifyContent={'center'}
				>
					<Link to={'/skillsHenrique'}>
						<Button
							sx={{ textDecoration: 'none' }}
							variant="outlined"
						>
							{' '}
							Henrique
						</Button>
					</Link>
				</Grid>
				<Grid
					xs={12}
					item
					display={'flex'}
					padding={2}
					justifyContent={'center'}
				>
					<Link to={'/skillsGustavo'}>
						<Button
							sx={{ textDecoration: 'none' }}
							variant="outlined"
						>
							Gustavo{' '}
						</Button>
					</Link>
				</Grid>
			</Grid>
		</>
	);
}
