/* eslint-disable react/prop-types */
import React from 'react';
import image from '../assets/_fb612cf5-bcd0-4ab1-8fb5-f7711c2b5412.jpeg'

export const NewsBlock = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-1 py-1" style={{maxWidth: "345px"}}>
  <img src={src?src:image} className="card-img-top" style={{height: "200px", width:"335px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 50)}</h5>
    <p className="card-text">{description?description.slice(0, 90):"GlobalPress Hub: Your instant link to worldwide and national news in just one click. Stay connected, stay informed."}</p>
    <a href={url} className="btn btn-primary">Go to Article</a>
  </div>
</div>
  )
}
