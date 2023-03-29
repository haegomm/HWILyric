import styled from 'styled-components';

export const TabMenu = styled.ul`
    // background-color: #dcdcdc;
    // color: rgb(232, 234, 237);
    background-color: FFFFFF;
    color: 636161
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    margin-bottom: 7rem;
    margin-top: 10px;

    .submenu {
        display: flex;
        /* justify-content: space-between;
        width: 380px;
        heigth: 30px; */
        width: calc(100% /3);
        justify-content: center;
        padding: 10px;
        font-size: 15px;
        transition: 0.5s;
        // border-radius: 10px 10px 0px 0px;
    }

    .focused {
        // background-color: rgb(255,255,255);
        color: rgb(222,179,251);
    }

    & div.desc {
        text-align: center;
    }
`;

export const Desc = styled.div`
text-align: center;
`;