import React from 'react';
import { Route } from 'react-router';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';

const ShopPage=({match})=>{
     console.log(match);
     return(<div className='collection'>
     <Route exact path={`${match.path}`} component={CollectionOverview} />
     <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>)
    }


   
export default ShopPage;