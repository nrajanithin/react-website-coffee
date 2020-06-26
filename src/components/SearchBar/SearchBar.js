import React from 'react'
import './Search.css'
class SearchBar extends React.Component
{
    render()
    {
        return(
                <div style={{display:'flex'}}>
                    <input style={{borderRadius:'5px 0px 0px 5px'}} placeholder="SEARCH.." type='text' />
                    <button style={{backgroundColor:'#b5651d'}}>GO</button>
                </div>
        );
    }
}
export default SearchBar;