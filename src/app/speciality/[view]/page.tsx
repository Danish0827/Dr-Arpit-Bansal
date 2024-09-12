import Speciality from '@/components/Speciality/Speciality'
import React from 'react'
import abouts from '@/assets/images/breadcrump/3.png'
import BreadCrumb from '@/components/Layout/BreadCrump/BreadCrump'

const speciality = ({params}:any) => {
    const title = params.view.replace('-', ' ');
  return (
    <>
     <BreadCrumb
        title={title}
        page={title}
        img={abouts.src}
        version={false}
      />
     <Speciality title={params.view}/>
    </>
  )
}

export default speciality
