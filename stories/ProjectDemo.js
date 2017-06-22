import React from 'react';
import HexMap from '../src/app/components/Hex';
import HexMapStateControls from '../src/app/components/HexMapStateControls';
import SimSpeedControls from '../src/app/components/SimSpeedControls';
import HexLife from '../src/app/components/HexLife';

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
                <HexMapStateControls />
                <HexLife />
                <SimSpeedControls />
            </nav>
            <HexMap radius="4"/>
        </main>
        <footer>
        </footer>
      </section>
    );
  }
}