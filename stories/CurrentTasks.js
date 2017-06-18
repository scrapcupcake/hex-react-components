import React from 'react';

import { storiesOf } from '@storybook/react';

const styleOverrides = `
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
        return <section>
            <style>{styleOverrides}</style>
            <header>Immediate Project Goals</header>
            <main>
                <ul>
                    <li className="checked">Radius 2 on Radius 3 Wraparound Hex Map Story</li>
                    <li className="checked">HexTiles content children of a HexMap inherit layout and cell-size from HexMap</li>
                    <li className="checked">Basic init HexWorld rendering</li>
                    <li className="checked">Fix HexWorld cell mutations?</li>
                    <li>HexWorld integration with redux & HexWorld animation rendering</li>
                    
                    <li>Watch Egghead React video lessons
                        <ul>
                        <li className="checked">
                        <a href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux">
                            The idiomatic redux course
                        </a>
                        <a href="https://egghead.io/lessons/javascript-redux-filtering-redux-state-with-react-router-params">
                            starting at this lesson left off from yesterday
                        </a></li>
                        <li className="checked"><a href="https://egghead.io/courses/build-your-first-production-quality-react-app">
                        This production quality react app course
                        </a></li>
                        <li><a href="https://egghead.io/lessons/javascript-install-development-tools-for-preact">
                        This Preact (p[re)act] course, a lightweight preboot react.
                        </a></li>
                    </ul>
                    </li>
                </ul>
            </main>
        </section>
    }
}