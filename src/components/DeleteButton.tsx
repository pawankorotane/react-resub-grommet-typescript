import * as React from 'react';
import { Button } from 'grommet';
import { Close } from 'grommet-icons'

import TodoStore from '../store/TodoStore'

interface DeleteButtonProps {
  id: string;
  deleteTodo: (id: string) => void;
}
export const DeleteButton: React.SFC<DeleteButtonProps> = ({
  id,
  deleteTodo
}) => {
  const onDelete = () => {
    deleteTodo(id);
  };
  return (
    <React.Fragment>
      <Button onClick={onDelete} plain={true} icon={<Close />} />
    </React.Fragment>
  );
};
