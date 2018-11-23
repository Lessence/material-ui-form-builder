import React from 'react';
import ReactDOM from 'react-dom';
import Form from './index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const fields = [
  {name: 'image',  type: 'image2', position: 'flex', resource: '/test', uploadSuccess: () => console.log('upload')},
  {name: 'name',  type: 'multiLineText', emoji: true },
  {name: 'limit', type: 'number'},
  {name: 'select', type: 'select', items: [{value: 1, title: 'first item'},{value: 2, title: 'second item'}], multiple : true },
]
const muiTheme = getMuiTheme({});

const saveForm = (values) => {
  console.log(values);
}

ReactDOM.render(
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Form
        fieldContainerStyle={{backgroundColor: '#fefefe', padding: 10}}
        onChange={(values) => console.log(values)}
        delayTime={300}
        delayTriggers={['name', 'limit']}
        onDelayedChange={(values)=>console.log('delayed values: ', values)}
        fields={fields}
        values={{name: 'test', limit: 10, image: 'https://picsum.photos/1200/150'}}
        saveForm={saveForm}
        errors={{limit: 'This field is required.'}}
      />
    </MuiThemeProvider>
  </div>,
  document.getElementById('root')
);
