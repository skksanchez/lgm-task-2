import React, { useState } from 'react'
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroller/dist/InfiniteScroll';
import UserService from './ApiCall';
import "../Style/scroll.css";
import 'materialize-css/dist/css/materialize.min.css';

export default function InfiniteScrollerWithReactInfiniteScroller() {

  const [userList, setUserList] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadUserList = (page) => {
    setTimeout(() => {
      UserService.getList(page)
      .then((res) => {
        const newList = userList.concat(res.data);

        setUserList(newList);

        if(res.data.length===0) {
          setHasMoreItems(false);
        } else {
          setHasMoreItems(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>{
      })
    
    }, 1500)
  }
  
  return (
    <div>
      
      <div className="section">

        <InfiniteScroll
          threshold={0}
          pageStart={0}
          loadMore={loadUserList}
          hasMore={hasMoreItems}
          loader={
          
          <div style={{display: 'flex', justifyContent: 'center', margin:'auto'}} id="#sec_load" className="text-center"> 
          
          <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
      </div>
         <h6> Fetching Data from Server </h6>
      </div>}>


            {userList.map((user, i) => 
              ( 
                <div key={i} className="row center-align">
                  <div className="col s12 m7">
                    <div className="card">
                      <div className="card-image">
                        <img src={user.avatar} alt={user.first_name}/>
                          <span className="card-title">{user.first_name}  {user.last_name}</span>
                      </div>
                      <div className="card-content">
                        <p>Hello Everyone my name is {user.first_name}</p>
                      </div>
                      <div className="card-action">
                      <a  href = "mailto:">{user.email}</a>
                      </div>
                    </div>  
                  </div>
                </div>
              )
            )}
        </InfiniteScroll>
        {hasMoreItems ? "" : <div id="#sec_load" style={{display: 'flex', justifyContent: 'center'}} className="text-center"><h5>Thats all what we can fetch</h5></div> }    
      </div>
    </div>
  )
}