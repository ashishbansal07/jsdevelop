import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import EdtitorSection from "Containers/editorSection";
import OutputContainer from "Containers/outputContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleContainers: {
                html: true,
                css: true,
                javascript: true,
            },
            iframeContent: {
                html: "",
                css: "",
                javascript: ""
            }
        };
        this.global = {
            editorContent: {
                html: "",
                css: "",
                javascript: ""
            }
        }

        this.handleEditorOnChange = this.handleEditorOnChange.bind(this);
        this.executeCodeToIframe = this.executeCodeToIframe.bind(this);
    };

    handleEditorOnChange(editorType, code, event) {
        this.global.editorContent[editorType] = code;
    };

    executeCodeToIframe() {
        const { editorContent } = this.global;
        this.setState({ iframeContent: editorContent });
    }

    toggleContainers(containerName) {
        const currState = this.state[containerName]["visible"];
    };

    render() {
        const { visibleContainers, iframeContent } = this.state;
        const { editorContent } = this.global;
        return (
            <div className="App">
                <h1> Lets Code Something together</h1>
                <button type="button" onClick={this.executeCodeToIframe}>Run</button>
                <div className="container_section">
                    <EdtitorSection
                        visibleContainers={visibleContainers}
                        editorContent={editorContent}
                        onCodeChange={this.handleEditorOnChange}
                    />
                    <OutputContainer content={iframeContent} />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);