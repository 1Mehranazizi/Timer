import React, { useState } from "react";
import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.open ? 0 : "-100%")};
  width: 300px;
  padding: 3rem 1rem;
  background-color: #e8e8e8;
  transition: left 0.3s ease;

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 2.1;
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 4px;
    transition:all .3s ease;
    transform-origin:-4px;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? "translateX(-100%)" : "translateX(0)")};
      opacity:${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
        transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
      }
  }
`;

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setOpen(!open)} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Aside open={open}>
        <h3>SideBar</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor facere
          vel vitae facilis qui dolorum illum accusantium veniam blanditiis
          neque tempora commodi, exercitationem cupiditate inventore pariatur!
          Obcaecati alias eveniet quod?
        </p>
      </Aside>
    </>
  );
};

export default SideBar;
