import React from 'react';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import classnames from 'classnames';
import GameList from "./common/GameList";

export default class Sports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '0',
            tabs: [
                {
                    title: "Soccer",
                    games: [
                        {
                            title: "CHAMPION LEAGUE",
                            time: "today",
                            collapse: false
                        },
                        {
                            title: "CLUB FRIENDLY",
                            time: "tomorrow",
                            collapse: false
                        }
                    ]
                },
                {
                    title: "Tennis",
                    games: [
                        {
                            title: "WIMBLEDON CHAMPIONSHIP",
                            time: "7/8/19",
                            collapse: false
                        }
                    ]
                }
            ]
        }
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render = () =>
        <div className="mt-3 container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '0' })}
                                        onClick={() => { this.toggleTab('0'); }}
                                    >
                                        {this.state.tabs[0].title}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggleTab('1'); }}
                                    >
                                        {this.state.tabs[1].title}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="0">
                                    <Row>
                                        <Col sm="12">
                                            <GameList games={this.state.tabs[0].games}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <GameList games={this.state.tabs[1].games}/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>

    </div>
}