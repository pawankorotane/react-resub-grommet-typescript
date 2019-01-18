import * as React from 'react';
import { Box } from 'grommet';

interface IAppProps {
    title: string
}

const AppBar: React.SFC = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        {...props}
    />
)

export default AppBar;