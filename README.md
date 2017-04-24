# react-tab
react tab component

## Usage

npm install --save react-super-tab

```javascript
import Tab, { TabTitle, TabPanel } from 'react-super-tab';
```

```xml
<Tabs>
    <TabTitle to="1">
        tab1
    </TabTitle>
    <TabTitle to="2">
        tab2
    </TabTitle>
    <TabPanel for="1">
        TabPanel1
    </TabPanel>
    <TabPanel for="2">
        TabPanel2
    </TabPanel>
</Tabs>
```

### composite usage
``` xml
<Tabs onSelect={ this.onSelect } activeLinkStyle={ { color: 'red' } } defaultSelectedTab="2">
    <div>
        <TabTitle to="1">
            tab1
        </TabTitle>
    </div>
    <div>
        <TabTitle to="2">
            tab2
        </TabTitle>
    </div>
    <div>
        <TabPanel for="1">
            TabPanel1
        </TabPanel>
    </div>
    <div>
        <TabPanel for="2">
            TabPanel2
        </TabPanel>
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

#### [demo](http://htmlpreview.github.io/?https://github.com/LukeLin/react-tab/blob/master/example.html)
