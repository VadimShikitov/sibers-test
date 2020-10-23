import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initApp } from '../../ducks/app/actions';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../components/Routes';

/**
 * The main component that initializes the application
 * @returns Routes Component whos managing application routes
 */
export const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};
