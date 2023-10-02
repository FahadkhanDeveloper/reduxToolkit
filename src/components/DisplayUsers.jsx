import React from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice'

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    });
    const deleteUser = (id) => {
            dispatch(removeUser(id))
    }

    return (

        <Wrapper>
            {data.map((user, id) => (
                <User key={id}>
                    {user}
                    <button className="btn-delete" style={{ marginLeft: 'auto' }} 
                    onClick={() => deleteUser(id)}>
                        <MdDeleteForever className="delete-icon" />
                    </button>
                </User>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    background-color: ${(props) => (
        `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`
    )};

    &:first-child {
        border-top: 1px solid #eee;
    }
`;

export default DisplayUsers;
