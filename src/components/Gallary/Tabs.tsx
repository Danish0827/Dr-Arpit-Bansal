import React from 'react';
import { Tabs } from 'antd';
import LDC from './Events/LDC';

// Placeholder components
// const LDC: React.FC = () => <div>LDC Component Content</div>;
const AnotherComponent: React.FC = () => <div>Another Component Content</div>;

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={[
      {
        label: 'Custom Tab 1',
        key: '1',
        children: <LDC />,  // Render LDC component in Tab 1
      },
      {
        label: 'Custom Tab 2',
        key: '2',
        children: <AnotherComponent />,  // Render another component in Tab 2
      },
      {
        label: 'Custom Tab 3',
        key: '3',
        children: 'Content of Tab Pane 3',  // You can replace this with any other content
      },
    ]}
  />
);

export default App;
