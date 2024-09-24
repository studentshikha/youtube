import { useSelector } from "react-redux";

const SideBar = ()=>{
  
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

    return   (

        isMenuOpen && (
        <div className="w-48 border h-[100vh] shadow-lg shadow-gray-200 border-black">
            <h1 className="font-bold pt-5 ">subscriptions</h1>
            <ul className="pt-2"> 
              <li>Home</li>
              <li>Sports</li>
              <li>videos</li>
              <li>lives</li>
            </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul> 
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5">subscriptions</h1>
            <ul> 
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
            </ul>
        </div>
        )
    )
}
export default SideBar;