import * as React from 'react';
import { Meter, Box } from 'grommet';

export const TodoAppDashboard: React.SFC<{}> = (props) => {
    const series = [
        { color: 'status', label: 'Past Due', value: 30 }
    ]
    return (
       
    <Box direction='row'>
        <Box basis='1/3' align='center'>
        <Meter
          type="circle"
          background="light-2"
          values={[{value: 30, label: 'Test'}]}
          size="xsmall"
          thickness="small"
        />
        </Box>
    </Box>
)};


