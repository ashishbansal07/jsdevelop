import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./app.css";
import EdtitorSection from "Containers/editorSection";
import OutputContainer from "Containers/outputContainer";
import PanelToggler from "Components/panelToggler";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleContainers: {
                html: {
                    visible: true,
                    label: "HTML"
                },
                css: {
                    visible: true,
                    label: "CSS"
                },
                javascript: {
                    visible: true,
                    label: "Javascript"
                },
                output: {
                    visible: true,
                    label: "Result"
                }
            },
            iframeContent: {
                html: "",
                css: "",
                javascript: ""
            }
        };
        this.global = {
            editorContent: {
                html: "<p>Hello, world!</p>",
                css: "p { color: blue; }",
                javascript: "console.log('hi')"
            },
            availableSections: ["html", "css", "javascript"]
        }

        this.handleEditorOnChange = this.handleEditorOnChange.bind(this);
        this.executeCodeToIframe = this.executeCodeToIframe.bind(this);
        this.toggleContainers = this.toggleContainers.bind(this);
    };

    handleEditorOnChange(editorType, code, event) {
        this.global.editorContent[editorType] = code;
    };

    executeCodeToIframe() {
        const { editorContent } = this.global;
        this.setState({ iframeContent: editorContent });
    }

    toggleContainers(containerName) {
        console.log(containerName);
        const {visibleContainers} = this.state;
        visibleContainers[containerName].visible = !visibleContainers[containerName].visible;
        this.setState({visibleContainers});
    };

    render() {
        const { visibleContainers, iframeContent } = this.state;
        const { editorContent, availableSections } = this.global;
        return (
            <div className="App">
                <h1 className="title"> JS Develop</h1>
                <PanelToggler 
                    visibleContainers={visibleContainers} 
                    onButtonClick={this.toggleContainers} 
                    onExecuteClick={this.executeCodeToIframe}
                />
                <div className="container_section">
                    <EdtitorSection
                        editorContent={editorContent}
                        onCodeChange={this.handleEditorOnChange}
                        availableSections = {availableSections}
                        visibleContainers = {visibleContainers}
                    />
                    {visibleContainers.output.visible ? (<OutputContainer content={iframeContent} />) : null}
                </div>
            </div>
        );
    }
}

export default hot(module)(App);