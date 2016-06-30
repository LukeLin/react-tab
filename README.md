# react-tab
react tab component

## Usage
``` javascript
import Tabs, { TabLink, TabContent } from '../../components/common/Tab';
```

```` xml
<Tabs>
    <TabLink to="1">
        tab1
    </TabLink>
    <TabLink to="2">
        tab2
    </TabLink>
    <TabContent for="1">
        TabContent1
    </TabContent>
    <TabContent for="2">
        TabContent2
    </TabContent>
</Tabs>
```

### composite usage
``` xml
<Tabs onSelect={ this.onSelect } activeLinkStyle={ { color: 'red' } } defaultSelectedTab="2">
    <div>
        <TabLink to="1">
            tab1
        </TabLink>
    </div>
    <div>
        <TabLink to="2">
            tab2
        </TabLink>
    </div>
    <div>
        <TabContent for="1">
            TabContent1
        </TabContent>
    </div>
    <div>
        <TabContent for="2">
            TabContent2
        </TabContent>
    </div>
</Tabs>
```
### nest tab components
``` xml
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
                TabTitle a
            </TabTitle>
            <TabTitle label="b">
                TabTitle b
            </TabTitle>
            <TabPanel for="a">
                TabPanel a
            </TabPanel>
            <TabPanel for="b">
                TabPanel b
            </TabPanel>
        </Tab>
    </TabPanel>
</Tab>
```
