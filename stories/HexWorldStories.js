import {hexWorldReducer} from './hexworld';
import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import {HexMap, HexTile} from "../src/app/components/Hex";
import {hexmap_values} from 'hexs6';

let hexWorld = hexWorldReducer({},{type:"init"});

console.log("My Hex world is?",hexWorld);

const HexMapCenterWrap = styled.div`
height: 500px;
width: 700px;
position: relative;
left: 200px;
top: 150px;
`


export default storiesOf("HexWorlds", module)
.add("init", () => <HexMapCenterWrap><HexMap cells={hexmap_values(hexWorld.cells)} radius={2}/></HexMapCenterWrap>);