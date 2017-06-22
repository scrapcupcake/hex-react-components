import {hexWorldReducer} from './hexworld';
import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import HexMap from '../src/app/components/Hex';
import HexTile from '../src/app/components/HexTile';
import {hexmap_values} from 'hexs6';

let hexWorld = hexWorldReducer({radius: 5},{type:"init"});


console.log("My Hex world is?",hexWorld);

const HexMapCenterWrap = styled.div`
height: 500px;
width: 700px;
position: relative;
left: 200px;
top: 150px;
`


let stories = storiesOf("HexWorlds", module)
.add("init", () => <HexMapCenterWrap><HexMap cells={hexmap_values(hexWorld.cells)} radius={2}/></HexMapCenterWrap>);

let stepsCount = 0;
let currentHexWorld = hexWorld;
while(stepsCount < 10){
    let nextHexWorld = hexWorldReducer(currentHexWorld,{type:"advance"});
    stories.add(`steps ${stepsCount}`, () => <HexMapCenterWrap><HexMap cells={hexmap_values(nextHexWorld.cells)} radius={2}/></HexMapCenterWrap>);
    currentHexWorld = nextHexWorld;
    stepsCount++;
}

export default stories;
