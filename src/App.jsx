import "./styles.css";
import InputFunc from "./components/input";
import Lists from "./components/lists";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal, Typography, Box } from "@mui/material";

const App = () => {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState({});

  const handleOpen = (todoItem) => {
    setSelectedItemForEdit(todoItem);
    setValue(todoItem.text);
    setOpen(true);
    setIsModal(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsModal(false);
  };

  const handleEditInput = (e) => {
    setValue(e.target.value);
  };

  const handleEditSubmit = () => {
    const newList = [...list];
    let targetIndex = -1;
    for (let i in list) {
      if (list[i].id === selectedItemForEdit.id) targetIndex = i;
    }

    newList[targetIndex].text = value;
    setList(newList);
    setIsModal(false);
    setValue("");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  return (
    <div className="App">
      {isModal ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit todo
            </Typography>
            <input
              type="text"
              defaultValue={value}
              onChange={(e) => handleEditInput(e)}
            />
            <button type="submit" onClick={handleEditSubmit}>
              Sumit
            </button>
          </Box>
        </Modal>
      ) : (
        <div className="everything">
          <h1>To Do</h1>

          <InputFunc
            list={list}
            setList={setList}
            setValue={setValue}
            value={value}
          />
          <Lists
            handleOpen={handleOpen}
            list={list}
            setList={setList}
            setValue={setValue}
            value={value}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
      )}
    </div>
  );
};
export default App;
