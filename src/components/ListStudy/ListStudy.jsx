import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import css from './ListStudy.module.css';

const ListItem = ({ todo, deletTask }) => {
  return (
    <>
      <li className={css.list}>
        <p>{todo.task}</p>
        <div>
          <button>
            <AiFillDelete  onClick={()=> deletTask(todo.id)}/>
          </button>
          <button>
            <AiOutlineEdit />
          </button>
        </div>
      </li>
    
    </>
  );
};

export const ListStudy = ({ todos, deletTask }) => {
  if (!todos.length) {
    return;
  }
  return (
    <ul>
      {todos.map(todo => {
        return <ListItem todo={todo} key={todo.id} deletTask={deletTask}/>;
      })}
    </ul>
  );
};
