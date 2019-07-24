import React from 'react';
import Button from '@material-ui/core/Button';
import ExcelTable from './components/ExcelTable';

export default class App extends React.Component {
  render() {
    return (<div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <ExcelTable />
    </div>);
  }
}
