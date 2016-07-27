import React from 'react';
import ShortcutList from './components/ShortcutList.jsx';
import websites from './websites';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      domain: '',
    };
  }

  componentDidMount() {
    if (chrome && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const msg = { type: 'sr-get-url' };
        chrome.tabs.sendMessage(tabs[0].id, msg, (hostname) => {
          const splitted = hostname.split('.');
          this.setState({
            domain: splitted[splitted.length - 2],
          });
        });
      });
    }
  }

  render() {
    return (
      <div>
        <ShortcutList shortcuts={websites[this.state.domain] || websites.youtube} />
      </div>
    );
  }
}
