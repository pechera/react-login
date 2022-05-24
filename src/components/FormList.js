import "./FormList.css";

import ListItem from "./ListItem";

const FormList = (props) => {
  return (
    <div className="list__wrapper">
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            <ListItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
