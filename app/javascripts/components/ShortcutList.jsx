import React, { PropTypes } from 'react';
import Shortcut from './Shortcut.jsx';

export default class ShortcutList extends React.Component {
  render() {
    return (
      <div>
        {this.props.shortcuts.map((shortcut, index) => (
          <Shortcut {...shortcut} key={index} />
        ))}
      </div>
    );
  }
}

ShortcutList.propTypes = {
  shortcuts: PropTypes.array.isRequired,
};

ShortcutList.defaultProps = {
  shortcuts: [],
};
