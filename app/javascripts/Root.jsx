import React from 'react';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello',
    };

    this.onExtensionOpen = this.onExtensionOpen.bind(this);
  }

  componentDidMount() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log('Sending the message from the popup...');
      const msg = {
        type: 'get-shortcuts',
      };
      chrome.tabs.sendMessage(tabs[0].id, msg, (response) => {
        console.log('Received msg from content script', response);
      });
    });
  }

  onExtensionOpen(data) {
    console.log(data);
    this.setState({
      title: data,
    });
  }

  render() {
    return (
      <div>{this.state.title}</div>
    );
  }
}
