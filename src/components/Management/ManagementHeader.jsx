// React
import { useState, useEffect, useCallback } from 'react';

// React router
import { useParams, useSearchParams, Link } from 'react-router-dom';

// Hooks

// Components

const ManagementHeader = ({ title, subTitle }) => {
  return (
    <>
    <h1 className="text-3xl font-normal text-slate-900">{title}</h1>
    <p className="text-slate-500 text-sm">{subTitle}</p>
    </>
  )
}

export default ManagementHeader