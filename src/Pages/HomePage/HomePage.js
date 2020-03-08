import React from 'react';
import './HomePage.scss';
import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu';
const HomePage=(props)=>{
    console.log(props)
    return(<div className='homepage'>
    <button onClick={()=>props.history.push('/topics')}>Topics</button>
   <DirectoryMenu/>
        </div>)
}
export default HomePage;