import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import Welcome from './Welcome';
import ProjectPlan from './ProjectPlan';
import ProjectDemo from './ProjectDemo';
import CurrentTasks from './CurrentTasks';
import Wireframes from './Wireframes';
import { storiesOf } from '@storybook/react';

storiesOf("Welcome", module).
add("to hex react components Storybook", () => <Welcome/>).
add("the project plan", () => <ProjectPlan/>).
add("the project demo", () => <ProjectDemo/>).
add("today's project goals", () => <CurrentTasks/>);

storiesOf("Wireframes", module).
add("", () => <Wireframes></Wireframes>);

import HexStories from './Hex';
import HexMapStories from './HexMap';
import EmojiStories from './Emoji';
import WorldStories from './HexWorldStories';