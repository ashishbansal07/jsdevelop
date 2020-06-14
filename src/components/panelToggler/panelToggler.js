import React from "react";
import "./style.css";

export function PanelToggler(props) {
    const { visibleContainers, onButtonClick, onExecuteClick } = props;

    return (
        <div className="button_container">
            {Object.keys(visibleContainers).map((container, key) => {
                let panel = visibleContainers[container];
                let className = "panel_button";
                className += panel.visible ? " active" : "";
                return (
                    <button key={key} onClick={onButtonClick.bind(undefined, container)} className={className}>
                        {panel.label}
                    </button>
                );
            })}
            <button className="panel_button align-right" onClick={onExecuteClick}>Execute</button>
        </div>
    );
};