import React from 'react';
import './ListItem.css';
 
const ListItem = ({munro, onMunroClick}) => {
 
 const handleClick =() => {
   onMunroClick(munro);
 }
 
 return <li onClick={handleClick}>{munro.name}</li>
}
 
export default ListItem;
