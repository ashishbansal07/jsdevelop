import React, { Component } from 'react';
import "./styles.css";
class OutputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "about:blank"
        }
    }

    componentDidMount() {
        const url = this.getSourceUrl({
            html: '<p>Hello, world!</p>',
            css: 'p { color: blue; }',
            javascript: 'console.log("hi")'
        });
        var doc = document.querySelector('#result_frame');
        var doc = doc.contentDocument || doc.contentWindow.document;
        doc.open();
        doc.write(url);
        doc.close();
    }

    componentDidUpdate() {
        const { content } = this.props;
        const url = this.getSourceUrl(content);
        var doc = document.querySelector('#result_frame');
        var doc = doc.contentDocument || doc.contentWindow.document;
        doc.open();
        doc.write(url);
        doc.close();
    }

    getSourceUrl({ html, css, javascript }) {
        const source = (
            `
            <html>
              <head>
                <style type="text/css">
                    ${css || ''}
                </style>
              </head>
              <body>
                <script>${javascript || ''}</script>
                ${html || ''}
              </body>
            </html>
          `
        );
        return source;
    }

    render() {
        const { src } = this.state;
        return (
            <iframe
                id="result_frame"
                sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"
                frameBorder="0"
                name="<proxy>"
                src={src}
                className="iframe_container"
            />
        );
    }
}

export default OutputContainer;