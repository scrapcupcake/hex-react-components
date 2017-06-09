import React from 'react';

import { storiesOf } from '@storybook/react';

import {HexTile} from "../src/app/components/Hex";

export default storiesOf('Hexes', module).
add('200x200 with emoji', () => <HexTile height="200" width="200" emoji="heart" />).
add('50x50', () => <HexTile height="50" width="50" emoji="rocket"/>).
add('350x500', () => <HexTile height="350" width="500" emojiColor="#855223" emoji="poop"/>)
