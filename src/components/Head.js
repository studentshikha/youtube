import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = ()=>{

const [searchText ,  setSearchText] = useState("");

const [searchData , setSearchData] = useState([])
console.log(searchData)

useEffect(()=>{
//    1 step  --- make an api call after every key press
    // but if the diff between two api calls less than 200 ms decline the api call
//  2 step   i will only make an api call after 200ms not an every key press
  const timer = setTimeout(()=> getSearchSuggestion() ,200)
   return ()=>{
    clearTimeout(timer);
   }

},[searchText])

/*** every key press takes 200ms
 * 
 * key press - i 
 * render the component
 * useEffect call
 * settimeout execute
 * start timer --  make an api call after 200ms
 * suppose if even before 200ms i press the next key p
 * 
 * key -- ip
 * -destroy the component (useEffect retunr method)
 * rerender the component
 * useeffect call
 * settimeout execute
 * start timer -- make an api call after   2000ms
 * 
 * 
 * make an api calll
 * 
 * 
 * 
 * start  settimeout 200 ()the timer in seperate place
 * 
 * 
 * *************** */

const getSearchSuggestion =async()=>{
const data = await fetch(YOUTUBE_SEARCH_API + searchText)
const json = await data.json();
setSearchData(json[1])
}

const dispatch = useDispatch()

 const handleToggleMenu =()=>{
   dispatch(toggleMenu())
    };

    return (
        <div className="grid grid-flow-col sticky top-0 p-5 h-20 shadow-xl">
           <div className="flex col-span-1">
            <img 
            onClick={handleToggleMenu}
            className=" cursor-pointer h-[50px] mx-2"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" 
            alt="hamburger-menu"
            />

            <img 
            className="h-[60px] mx-2"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" 
            alt="logo"
            />
            </div>

            <div className="col-span-10">
                <input
               value={searchText}
               onChange={(e)=>setSearchText(e.target.value)}
                className="w-[60%]  border p-2 border-gray-400 rounded-l-3xl" type ="text" placeholder="search"/>

                <button
                className="border p-2  border-gray-400 rounded-r-3xl bg-gray-100">search</button>   
                <div className="p-5 w-[60%]  bg-white">
                  {
                    searchData.map((search)=>(<p>{search}</p> ))
                }  
               
            </div>
            </div>
            
           

            <div className="col-span-1">
                <img 
                className="h-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&s" alt="user-logo"/>
            </div>
            
        </div>
    )
}
export default Head;
// http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query