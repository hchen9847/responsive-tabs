import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import classnames from "classnames";

import { Tab } from "./components/tab";
import { TabTitle } from "./components/tabTitle";
import "./ui/ResponsiveTabs.css";

const classes = {
    active: "tab-active",
    inactive: ""
};

class ResponsiveTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.select = this.select.bind(this);
    }
    select() {
        // logic to determine to replace or add to ActiveTabs
        // window.viewport.something
        this.setState({ active: [newTab] });
        this.setState({ active: [...this.state.active, newTab] });
        //remove "tab-active" classes from all components that have it (minus the corresponding tab content)
        //var currentActive = ReactDOM.findDOMNode().getElementsByClassName('tab-active')
        var activeTabs = classnames("tab-active");
        activeTabs.map(this.setState({ active: this.state.inactive }));
        //also find corresponding tab content to set active
        this.setState({
            active: this.state.active
        });
        var tabChildContent = this.props.children.props.children;
        tabChildContent({
            active: this.state.active
        });
    }
    render() {
        const components = this.props.tabs;
        const stateStyle = this.state.active ? classes.active : classes.inactive;
        var tabTitleItem = components.map((title, index) => {
            return (
                <li key={index}>
                    <TabTitle
                        isActive={this.state.indexOf(index) > -1}
                        tabTitle={title.tabTitle}
                        handleToggle={this.select}
                    />
                </li>
            );
            // var ste = index === 0 ? "tab-active" : "";
            // var i = index;
            // return (
            //     <li className={ste + " " + stateStyle} onClick={this.select} key={title}>
            //         <TabTitle></TabTitle>
            //     </li>
            // );
        });
        const tabContentItem = components.map(function(content, index) {
            return (
                <div key={index}>
                    <Tab isActive={this.state.indexOf(index) > -1} content={content} />
                </div>
            );
            // var contentState = index === 0 ? "tab-active" : "";
            // return (
            //     <div className={contentState + " tab-pane mx-tabcontainer-pane " + stateStyle} key={content}>
            //         <Tab></Tab>
            //     </div>
            // );
        });

        return (
            <div>
                <ul>{tabTitleItem}</ul>
                <div>{tabContentItem}</div>
            </div>
        );
    }
}

export default hot(ResponsiveTabs);
