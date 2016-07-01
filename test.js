import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Tab, { TabTitle, TabPanel } from './index';

class App extends Component {
    constructor(props, context){
        super(props, context);
    }
    
    render(){
        return (
            <Tab defaultSelectedTab="b">
                <TabTitle label="a">
                    TabTitle a
                </TabTitle>
                <TabTitle label="b">
                    TabTitle b
                </TabTitle>
                <TabTitle label="c">
                    TabTitle c
                </TabTitle>
                <TabPanel for="a">
                    TabPanel a
                </TabPanel>
                <TabPanel for="b">
                    TabPanel b
                </TabPanel>
                <TabPanel for="c">
                    <Tab>
                        <TabTitle label="a">
                            sub TabTitle a
                        </TabTitle>
                        <TabTitle label="b">
                            sub TabTitle b
                        </TabTitle>
                        <TabPanel for="a">
                            sub TabPanel a
                        </TabPanel>
                        <TabPanel for="b">
                            sub TabPanel b
                        </TabPanel>
                    </Tab>
                </TabPanel>
            </Tab>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
