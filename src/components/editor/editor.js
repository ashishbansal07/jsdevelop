import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.editor = null; 
    }
    editorDidMount(editor, monaco) {
        this.editor = editor;
        // editor.focus();
    }

    onCodeChange(newVal, e) {
        this.props.onChange(newVal, e);
    }

    componentDidUpdate() {
        this.editor.layout();
    }

    render() {
        const { language, code, visible } = this.props;
        const options = {
            selectOnLineNumbers: true,
            automaticLayout: true
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
                            automaticLayout
                            options={options}
                            onChange={this.onCodeChange.bind(this)}
                            editorDidMount={this.editorDidMount.bind(this)}
                        />
                    ) : null
                }
            </>
        );
    }
}

export default Editor;