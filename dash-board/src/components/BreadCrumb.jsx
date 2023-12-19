import React, {useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function BreadCrumb() {
    const location=useLocation();
    const [path,SetPath]=useState([]);
    useLayoutEffect(()=>{
        SetPath(location.pathname.split('/').splice(1));
        console.log(path);
    },[location])
  return (

<nav className="flex  my-5" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    {
        path.map((e)=>{
            return(
                <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{
                    e
                  }</Link>
                </div>
              </li>
            )
        })
    }
  </ol>
</nav>

  )
}

export default BreadCrumb