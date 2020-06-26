import React from 'react'
import './TagMenu.css'
class TagMenu extends React.Component
{
    render()
    {
        return(
            <div className="nithin">
		            <div className="tag-triangle"></div>
		            <div className="hole"></div>
		            <div className="tag-rectangle">
                        <div>
                            <table className="TagTable">
                                <thead>
                                    <tr><td><button>Fathers day</button></td></tr>
                                </thead>
                                <tbody>
                                    <tr><td><button>Chocolates</button></td></tr>
                                    <tr><td><button>Fudge</button></td></tr>
                                    <tr><td><button>Lollies</button></td></tr>
                                    <tr><td><button>Hampers</button></td></tr>
                                    <tr><td><button>Special Diet</button></td></tr>
                                    <tr><td><button>On Sale</button></td></tr>
                                    <tr><td><button style={{backgroundColor:'brown',color:'yellow'}}>Categories</button></td></tr>
                                </tbody>
                            </table>
                        </div>
		            </div>
	        </div>
        );
    }
}
export default TagMenu;