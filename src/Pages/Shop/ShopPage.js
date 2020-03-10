import React,{Component} from 'react';
import ShopData from './ShopData';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class ShopPage extends Component{
    constructor()
    {
        super();
        this.state={collections:ShopData}
    }

    render()
    {
        const {collections}=this.state;
        return(<div className='collection'>
        <h1>Collection</h1>
        {collections.map(({id,...otherCollectionsProps})=>{
            return(<CollectionPreview key={id} {...otherCollectionsProps}/>)
        })}
            </div>)
    }
}

export default ShopPage;