import React, { useState } from "react";
import { Container, Form, Table, Button } from "react-bootstrap";

const Forms = () => {
  const [storeData, setStoreData] = useState([]);
  const [data, setData] = useState({
    task: "",
  });

  const { task } = data;

  //------------------------------
  //------------------------------

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //------------------------------
  //------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreData([...storeData, data]);
  };
  //------------------------------
  //------------------------------
  const removeItem = (index) => {
    const newdata = [...storeData];
    newdata.splice(index, 1);
    setStoreData(newdata);
  };

  //---
  const handleChange1 = (e,index)=>{
      setStoreData([...storeData.slice(0,index), {...storeData[index],completed:!storeData[index].completed},...storeData.slice
    (index+1)]);
  }

  return (
    <>
      <Container>
        <h1 style={{ marginTop: "50px" }}>Todo List</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            style={{ margin: "20px", width: "750px", height: "35px" }}
            placeholder="Enter Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <br />

          <Button
            className="btn btn-primary"
            type="submit"
            value="add"
            style={{
              margin: "20px",
              marginTop: "-90px",
              marginLeft: "800px",
              heigth: "100px",
            }}
          >
            Add{" "}
          </Button>
        </Form>
        <Table border striped>
          <thead>
            <tr >
                <th>Status</th>
              <th >Task</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {storeData.map((item, index) => {
              return (
                <tr>
                    <td>
                    <input type="checkbox"  checked={item.completed} onChange={(e) =>handleChange1(e,index)}name="" id="" /> &nbsp;&nbsp;
                  </td>
                  <td style={item.completed ?{textDecoration: 'line-through'}:{textDecoration: 'none'}}>
                    {item.task}
                  </td>

                  <td>
                    {" "}
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Forms;
