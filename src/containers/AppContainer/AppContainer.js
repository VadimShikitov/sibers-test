import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initApp } from '../../ducks/app/actions';
import { Routes } from '../Routes';

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
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
