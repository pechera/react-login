import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="list__item">{`${props.user.name} - ${props.user.age}`}</div>
  );
};

export default ListItem;
