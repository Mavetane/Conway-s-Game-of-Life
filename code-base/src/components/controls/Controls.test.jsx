import React from 'react';
import Controls from './Controls'
import { render } from '@testing-library/react';


describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    })
})