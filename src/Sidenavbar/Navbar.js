import React from 'react';
import './NavcssFiles/navbar.css'
import SideNavbar from './SideNavbar';
function Navbar() {
    return (
        <div className='view_container'>
            <div className='top_nav'>
                <div id="title_logo">
                    <span className='header_space'>
                        <h2>Hello, lorem ipsum</h2>
                        <p>Keep moving & stay healthy</p>
                    </span>      
                </div>

                <div className='profile_detail'>
                    <button id="button">+Add Member</button>
                    <i class="fa-solid fa-bell" id="bell_icon"></i>
                    <div id="out_circle"><img src="https://i.pinimg.com/736x/1e/27/c8/1e27c8ebb7c0791a4bece5a28ab98d3c.jpg" alt="" id="pic_profile"/></div>
                    <span>
                      <select id="select">
                        <option value="" key="">lorem ipsum</option>
                      </select>
                    </span>
                </div>
            </div>

         <SideNavbar/>
        
            <div className='setprofile'>
                <img src="https://img.freepik.com/free-vector/healthy-lifestyle-diet-fitness-vector-sign-shape-heart-with-multiple-icons-depicting-various-sports-vegetables-cereals-seafood-meat-fruit-sleep-weight-beverages_1284-44073.jpg?w=2000" alt=""  id="pic_routine"/>
                <h2 id='set'>Set your healthy profile</h2>
                <p id="setting">Go to <b style={{color:'#3B7CB5'}}>Setting</b> </p>
            </div>

        </div>
    );
}

export default Navbar;