import React from 'react';
import './style.css'
import { Loader, LoadingContainer } from './StyleLoading';

export default () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  )
}