import classes from "./TodoItem.module.css";


const TodoItem: React.FC<{
  text: string;
  removeItem: () => void;
  
}> = (props) => {
  


  return (
    <span onClick={props.removeItem} className={classes.item}>
      <div className={classes.overlay}>
        {props.text}
      </div>
    </span>
  );
};

export default TodoItem;
