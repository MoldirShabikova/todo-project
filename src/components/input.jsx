import { Input, Button } from "reactstrap";
import { uuid } from "uuidv4";
const InputFunc = ({ setValue, value, list, setList }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    setList([...list, { text: value, id: uuid() }]);
    setValue("");
  };

  return (
    <div className="container">
      <Input type="text" value={value} onChange={handleInput} />
      <Button onClick={handleClick}>Submit</Button>
    </div>
  );
};

export default InputFunc;
