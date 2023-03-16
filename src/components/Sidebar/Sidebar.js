import React ,{useEffect}from 'react'
import "./Sidebar.scss"
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { getSidebarStatus,setSidebarOff } from '../../store/SidebarSlice'
import { fetchAsyncCategories, getAllCategories } from '../../store/CategorySlice'
const Sidebar = () => {
    const dispatch=useDispatch();
    const isSidebarOn=useSelector(getSidebarStatus);
    const categories=useSelector(getAllCategories);
    useEffect(()=>{
   dispatch(fetchAsyncCategories())
    },[dispatch])
  return (    
    <>
      <aside className={`sidebar ${isSidebarOn ? 'show-sidebar': ' '}`}>
      <button type='button' className='sidebar-hide-btn' onClick={()=>dispatch(setSidebarOff())}>
      <i className='fas fa-times'></i>
        </button>
        <div className='sidebar-content'>
          <div className="sidebar-heading text-uppercase text-bold mx-2">All Categories</div>
          
          <ul className="category-list text-capitalize ">
              {categories.map((category, index) => {
                return (
                  <li key={index} className="category-items">
                    <Link to={`category/${category}`}>{category}</Link>
                  </li>
                );
              })} 

            </ul>
        </div>

        </aside>
    </>
  )
}

export default Sidebar
