import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashScreen1 from './SplashScreen1';
test('verify component', () => {
	render(<SplashScreen1 />);
	const linkElement = screen.getByText(/SplashScreen1/i);
	expect(linkElement).toBeInTheDocument();
});
