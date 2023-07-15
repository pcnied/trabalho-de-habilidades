import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SkillsGustavo from '../../pages/Gustavo';
import SkillsHenrique from '../../pages/Henrique';
import SkillsPeterson from '../../pages/Peterson';
import Skills from '../../pages/Welcome';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/skillsPeterson" element={<SkillsPeterson />} />
				<Route path="/skillsGustavo" element={<SkillsGustavo />} />
				<Route path="/skillsHenrique" element={<SkillsHenrique />} />
				<Route path="/" element={<Skills />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
