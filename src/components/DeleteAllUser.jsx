import React from 'react'
import styled from 'styled-components';
// import { clearAllUsers } from '../store/slices/UserSlice';
// for createAction
// import { clearAllUsers } from '../store/actions/index';
import { clearAllUsers } from "../store/actions";

import { useDispatch } from 'react-redux';

const DeleteAllUser = () => {
   const dispatch = useDispatch();
  const deleteUsers = () => {
          dispatch(clearAllUsers());

  }
  return <Wrapper>
        <button className="clear-btn" onClick={deleteUsers}>Clear user</button>
  </Wrapper>
  
}
const Wrapper = styled.section `
      .clear-btn {
        margin-top: 10px;
        font-size: 20px;
        text-transform: capitalize;
        background-color: red;
        color: white;
      }
`

export default DeleteAllUser