import React, { useState, Fragment, useEffect } from 'react'
import Adminsidebar from '../Adminsidebar'
import './users.css';
import { db } from "../../firebase"
import { userColumns} from "./adminusersdata";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { DataGrid } from "@mui/x-data-grid";
import "./adminusers.css"
import {Button, Modal, Label, TextInput} from "flowbite-react"
import { registerWithEmailAndPassword } from "../../firebase";
import { useNavigate } from 'react-router-dom';


const AdminUsers = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setVisible] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
     const fetchData = async () => {
       let list = [];
       try {
        const usersRef = collection(db, "users");
         const querySnapshotRef = await getDocs(usersRef);
         querySnapshotRef.forEach((doc) => {
           list.push({ id: doc.id, ...doc.data() });
        });
         setData(list);
         console.log(list);
       } catch (err) {
        console.log(err);
      }
     };
    fetchData();
  }, []);

  console.log(data)

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setErrorMessages('Passwords does not match')
      }
    }
    return isValid
  }

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const addusers = () => {
    if (validatePassword()) {;
    registerWithEmailAndPassword(name, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    }).catch(err => setErrorMessages(err.message))
    }
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    if (!email) {
      // Username input is empty
      setErrorMessages({ email: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ email: "noPassword", message: errors.noPassword });
      return;
    }
  };

  // Render error messages
  const renderErrorMsg = (email) =>
    email=== errorMessages.email && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const handleModalOpen = () =>{
    setVisible(true)
  }

  return (
    <Adminsidebar>
    <div className="datatable">
      <div className="datatableTitle">
        <h1 className='text-2xl font-bold text-black'>Users Management</h1>
        <React.Fragment>
  <Button className='bg-maroon hover:bg-red-800' onClick={handleModalOpen}>
    Add New
  </Button>
  <Modal
    show={modalIsOpen}
    size="md"
    popup={true}
    onClose={() => setVisible(false)}
  >
    <Modal.Header />
    <Modal.Body>
    {errorMessages && <div className='auth__error'>{errorMessages}</div>}
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Add new reviewers and admins
        </h3>
        <div>
        <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Name"
            />
          </div>
          <TextInput
            value={name}
            id="text"
            type="text"
            placeholder="name"
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="mail"
              value="Email"
            />
          </div>
          <TextInput
            type="email"
            id="email"
            placeholder="name@company.com"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <div className="flex justify-between">
        </div>
        <div className="w-full items-center justify-center flex">
          <Button className='bg-maroon hover:bg-red-800' type="submit" value="Signup" onClick={addusers}>
            Create new user
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </Adminsidebar>
  );
};

export default AdminUsers
