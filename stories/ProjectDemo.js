import React from 'react';
import {HexMap, HexMapStateControls} from '../src/app/components/Hex';

const relativePosStyles = `
            .pinterest-widget--board {
              position: relative;
            }
            li.checked{
              list-style-type:none;
            }
            li.checked:before {
              content: "✔️";
              display: block;
              position: absolute;
              left: 2em;
            }
`;

export default class ProjectDemo extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <section>
        <header>
        Welcome to the project demo.
        </header>
        <main>
            <nav>
                <HexMapStateControls/>
            </nav>
            <HexMap radius="4"/>
        </main>
        <footer>
        </footer>
      </section>
    );
  }
}