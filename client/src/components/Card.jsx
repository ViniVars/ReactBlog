import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({blog}) => {
    const router = useNavigate()
    function Inc(id){
        let Gojo = window.localStorage.getItem(`Blog${id}`)
        Gojo = JSON.parse(Gojo)
        Gojo.val++
        window.localStorage.setItem(`Blog${id}`, JSON.stringify(Gojo))
    }
  return (
    <StyledWrapper>
      <div className="card font-bold">
        <div className="image_container flex justify-center items-center">
          <img src={blog.ig} alt="" />
        </div>
        <div className="title">
          <span>Title : {blog.title}</span>
        </div>
        <div className="size">
          <span className='text-lg'>{blog.val} <span className='text-sm'>Click(s)</span></span>
        </div>
        <div className="action flex justify-center items-center">
          <button className="cart-button" onClick={()=>{Inc(blog.Bid);router(`/Details/Blog${blog.Bid}`)}}>
            <span>View Blog</span>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --bg-card: #27272a;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --light: #d9d9d9;
    --zinc-800: #18181b;
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    padding: 1rem;
    width: 14rem;
    background-color: var(--bg-card);

    border-radius: 1rem;
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;

    position: relative;
    z-index: 5;

    width: 100%;
    height: 8rem;
    background-color: var(--primary-800);

    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;

    width: 100%;

    font-size: 1rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;

    padding: 0.5rem;
    background-color: var(--zinc-800);

    font-size: 0.75rem;
    color: var(--light);

    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;

    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }
  .item-list-button:focus {
    background-color: var(--primary);

    border: 2px solid var(--primary-shadow);

    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--light);
  }

  .cart-button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    width: 100%;
    background-image: var(--bg-linear);

    font-size: 0.75rem;
    font-weight: 500;
    color: var(--light);
    text-wrap: nowrap;

    border: 2px solid hsla(262, 83%, 58%, 0.5);
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0.25rem 1px var(--light);
  }

  .cart-button .cart-icon {
    width: 1rem;
  }`;

export default Card;
