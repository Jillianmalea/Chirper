import React from 'react';
import Chirp from './chirp';

const Timeline = props => props.chirps.map((chirp, id) => <Chirp chirp={chirp} key={id} />);

export default Timeline