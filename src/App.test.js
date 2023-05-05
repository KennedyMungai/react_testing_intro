import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	const linkElement = screen.getByTestId('Link')
	expect(linkElement).toBeInTheDocument()
})

test('URL is correct', () => {
	render(<App />)
	const linkElement = screen.getByTestId('Link')
	expect(linkElement.getAttribute('href')).toContain('duckduckgo.com')
})
