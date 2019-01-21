import * as React from 'react';
import {
    Box,
    Button,
    FormField,
    Heading,
    Layer,
    TextArea,
    Select,
    Form
} from 'grommet';

import { Close } from 'grommet-icons';

interface TodoAddTaskFormProps {
    onClose?: () => void,
    Submit?: (val: any) => void
}

const TodoAddTaskForm: React.SFC<TodoAddTaskFormProps> = ({ onClose, Submit }) => {
    return (
        <Layer position='right' full='vertical' modal onClickOutside={onClose} onEsc={onClose}>
            <Box pad='small'>
                <Box tag='header' justify='between' direction='row' pad={{ vertical: 'medium' }} >
                    <Heading level='3'>Add Task</Heading>
                    <Button icon={<Close />} onClick={onClose} />
                </Box>
                <Form onSubmit={Submit} >
                    <Box pad='small'>
                        <FormField label='Task' htmlFor='label'>
                            <TextArea
                                id='labelId'
                                name='label'
                                fill
                                required
                                focusIndicator
                            />
                        </FormField>
                    </Box>
                    <Box pad='small'>
                        <FormField label='Status' htmlFor='statusId'>
                            <Select
                                id='select'
                                placeholder='Select'
                                options={['one', 'two', 'three']}
                                required
                            />
                        </FormField>
                    </Box>
                    <Box pad={{ vertical: 'large' }} align='start' tag='footer'>
                        <Button type='submit' label='Add' />
                    </Box>
                </Form>

            </Box>
        </Layer>
    );
};

export default TodoAddTaskForm;