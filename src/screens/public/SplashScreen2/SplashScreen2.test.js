import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashScreen2 from './SplashScreen2';
test('verify component', () => {
	render(<SplashScreen2 />);
	const linkElement = screen.getByText(/SplashScreen2/i);
	expect(linkElement).toBeInTheDocument();
});
