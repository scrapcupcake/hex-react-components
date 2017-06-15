import React from 'react';

import { storiesOf } from '@storybook/react';

import EmojiEditor from "../src/app/components/Emoji";

export default storiesOf("Emoji",module).add("editor", () => { return <EmojiEditor/> });