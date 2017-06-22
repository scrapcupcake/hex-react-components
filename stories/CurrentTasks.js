import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';



const Wrapper = styled.section`
            li {
                color: #A0A000;
                list-style-type:square;
            }
            li.bug{
                color: #A00000;
            }
            li.checked{
              color: #00A000;
              list-style-type:none;
              position: relative;
            }
            li.checked:before {
              content: "✔️";
              display: block;
              position: absolute;
              left: -1.5em;
            }
            li.stretch{
                list-style-type:none;
                position: relative;
                color: #A0A0A0;
            }
            li.stretch:before{
                content:"stretch goal";
                display: block;
                position: absolute;
                transform-origin: 50%;
                transform: rotate(45deg);
                left: -6em;
                font-size: 0.4em;
            }
`;

export default class CurrentTasks extends React.Component {
    render(){
        return <Wrapper>
            <header>Immediate Project Goals</header>
            <main>
                <ul>
                    <li className="checked">Hex Petri Low Fidelity Wireframes</li>
                    <li className="checked">Hex Petri High Fidelity Wireframes</li>
                    <li>Transfer Wireframes to React + styled</li>
                    <li>HexWorld integration with redux & HexWorld animation rendering</li>
                    <li>Basic HexWorld state controls: Radius, tick forward, autorun ticks, *map wraparound*</li>
                    <li>Advanced Hexworld Design with multiple populations, energy levels</li>
                    <li>Advanced Hexworld Visuals: Attack/Action Animations, Death/Birth animations</li>
                    <li>Advanced Hexworld UX/Controls: Define Populations, display/save/set RNG seed/save config</li>
                    
                    <li>Read Articles
                        <ul>
                        <li>
                            <a href="https://medium.com/@chenglou/react-motion-and-animated-4b3edf671cba">This article by the creator of React-Motion</a>
                        </li>
                        <li>
                            <a href="https://react.rocks/tag/Animation?show=40">Explore these animation examples</a>
                        </li>
                        <li>
                            <a href="https://facebook.github.io/react/docs/animation.html">The docs</a>
                        </li>
                    </ul>
                    </li>
                </ul>
            </main>
        </Wrapper>
    }
}