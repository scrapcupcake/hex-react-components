import React from 'react';

import { storiesOf } from '@storybook/react';

import {HexMap} from "../src/app/components/Hex";
import styled from 'styled-components';

const HexMapWrap = styled.div`
height: 100%;
width: 100%;
padding-left: 25%;
padding-top: 25%;
`

export default storiesOf('HexMaps', module).
add('Radius 3', () => <HexMapWrap><HexMap radius="1" /></HexMapWrap> );
