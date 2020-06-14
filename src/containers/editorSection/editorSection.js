import React, { Component } from 'react';
import Editor from 'Components/editor';

class EditorSection extends Component {
  constructor(props) {
    super(props);
  }

  displayContainers() {
    const { onCodeChange, editorContent, availableSections, visibleContainers } = this.props;
    let htmlJSX = [];

    availableSections.forEach((container, i) => {
        htmlJSX.push(
          <Editor
            language={container}
            onChange={onCodeChange.bind(undefined, container)}
            code={editorContent[container]}
            key={i}
            visible={visibleContainers[container]["visible"]}
          />
        );
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