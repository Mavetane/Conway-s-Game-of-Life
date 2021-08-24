import React from 'react'
import Grid from './Grid';
import { render } from '@testing-library/react';


describe('<Grid />', () => {
    it('renders without crashing', () => {
        render(<Grid />)
    })
})