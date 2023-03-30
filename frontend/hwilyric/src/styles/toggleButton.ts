import styled from "styled-components";

export const ToggleBoxWrapper = styled.div`
    position: relative;
`;

export const ToggleBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 26px;
    border-radius: 15px;
    background: #DEB3FB;
    cursor: pointer;
        &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        // box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;

export const ToggleBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 56px;
    height: 26px;
    &:checked + ${ToggleBoxLabel} {
    background: #572681;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin-left: 34px;
        transition: 0.2s;
        }
    }
`;
