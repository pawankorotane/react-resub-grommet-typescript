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
import { Todo } from '../models/TodoModels';

interface TodoAddTaskFormProps {
    onClose?: () => void,
    Submit?: (val: any) => void,
    updateStatus?: (option: any) => void,
    status?: string
}

enum statusOptions {
    critical = 0,
    ok = 0,
    warning = 0
}

const TodoAddTaskForm: React.SFC<TodoAddTaskFormProps> = ({ onClose, Submit, updateStatus, status }) => {
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
                                options={['Done', 'Warning', 'Past Due']}
                                required
                                onChange={updateStatus}
                                value={status}
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