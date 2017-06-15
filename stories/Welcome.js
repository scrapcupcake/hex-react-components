import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  note: {
    opacity: 0.5,
  },
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to the Storybook for Hex React Components</h1>
        <p>
          This is the UI component dev environment for this app.
        </p>
        <p>
          This file and the other stories for this project are located in the {' '} <code style={styles.code}>/stories</code> {' '} directory.
        </p>
        <p>
          A story is a single state of one or more UI components. Each represents a visual test case.
        </p>
      </div>
    );
  }
}
