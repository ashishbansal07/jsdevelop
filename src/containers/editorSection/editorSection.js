import React, { Component } from 'react';
import Editor from 'Components/editor';
import "./style.css";

class EditorSection extends Component {
  constructor(props) {
    super(props);
  }

  displayContainers() {
    const { onCodeChange, editorContent, availableSections, visibleContainers } = this.props;
    let htmlJSX = (
      <>
        {
          availableSections.map((container, i) => {
            return (
              <>
                {
                  (visibleContainers[container]["visible"] ? (
                    <div className="editor-container" key={i}>
                      <Editor
                        language={container}
                        onChange={onCodeChange.bind(undefined, container)}
                        code={editorContent[container]}
                        key={i}
                        visible={visibleContainers[container]["visible"]}
                      />
                    </div>
                  ) : null)
                }
              </>
              
            );
          })
        }
      </>

    );

    
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