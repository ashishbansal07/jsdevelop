import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class Editor extends Component {
    constructor(props) {
        super(props);
    }
    editorDidMount(editor, monaco) {
        // editor.focus();
    }

    onCodeChange(newVal, e) {
        this.props.onChange(newVal, e);
    }

    render() {
        const { language, code, visible } = this.props;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <>
                {
                    visible ? (
                        <MonacoEditor
                            height="82vh"
                            language={language}
                            theme="vs-dark"
                            value={code}
                            options={options}
                            onChange={this.onCodeChange.bind(this)}
                            editorDidMount={this.editorDidMount}
                        />
                    ) : null
                }
            </>
        );
    }
}

export default Editor;