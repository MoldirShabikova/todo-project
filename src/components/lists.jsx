import { Button } from "reactstrap";
const Lists = ({ list, setList, setValue, value, handleOpen }) => {
  return (
    <div className="row">
      <ul>
        {list.map((el) => (
          <li key={el.id}>
            {el.text}
            <Button onClick={() => handleOpen(el)} color="success">
              Edit
            </Button>

            <Button
              onClick={() => setList(list.filter((item) => item.id !== el.id))}
              color="danger"
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
