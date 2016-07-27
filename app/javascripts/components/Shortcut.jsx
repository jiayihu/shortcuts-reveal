import React, { PropTypes } from 'react';

function renderKey(key, index, array) {
  if (Array.isArray(key)) {
    const keys = key.map(renderKey);

    if (index !== array.length - 1) {
      return (
        <span className="key-wrapper" key={`${key}-wrapper`}>
          {keys}
          <span className="key__divider">OR</span>
        </span>
      );
    }

    return keys;
  }

  return (
    <span className="key" key={key}>{key}</span>
  );
}

export default function Shortcut(props) {
  return (
    <div className="shortcut">
      <div className="shortcut__combination">{props.combination.map(renderKey)}</div>
      <div className="shortcut__description">{props.description}</div>
    </div>
  );
}

Shortcut.propTypes = {
  combination: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};
