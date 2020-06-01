import React from 'react';
import MenuItem from '../MenuItem/MenuItem'
import './DirectoryMenu.scss';
import {selectSections} from '../../redux/Directory/DirectorySelector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
const DirectoryMenu=({sections})=>
    {
return(<div className='directory-menu'>{
    sections.map(({id,...allSectionsProps})=>{
      return(<MenuItem key={id} {...allSectionsProps}/>)
    })
}
</div>)
    }
const mapStateToProps=createStructuredSelector({sections:selectSections})

export default connect(mapStateToProps)(DirectoryMenu);