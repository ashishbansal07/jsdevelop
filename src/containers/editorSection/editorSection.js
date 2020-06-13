import React, { Component } from 'react';
import Editor from 'Components/editor';

class EditorSection extends Component {
  constructor(props) {
    super(props);
  }

  displayContainers() {
    const { visibleContainers, onCodeChange, editorContent } = this.props;
    let htmlJSX = [];

    Object.keys(visibleContainers).forEach((container, i) => {
      if (visibleContainers[container]) {
        htmlJSX.push(
          <Editor
            language={container}
            onChange={onCodeChange.bind(undefined, container)}
            code={editorContent[container]}
            key={i}
          />
        );
      }
    });
    return htmlJSX;
  }

  render() {
    return (
      <>
        {this.displayContainers()}
      </>
    );
  }
}

export default EditorSection;