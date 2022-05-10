import React from 'react'
import Home from './Home'
import About from './About'

export default function App({page}) {

    const [pages,setPages]=useState(page);
    useEffect(()=>{
        window.onpopstate=event=>{
            setPages(event.state)
        }
    },[]);

    function onChangePage(e){
        const newPage = e.target.dataset.page;
        window.history.pushState(newPage,'',`/${newPage}`);
        setPages(newPage)
    
    }

    const PageComponent = pages === "home" ? Home : About;

    return (
     <div>
         <button data-page="home" onClick={onChangePage}>home</button>
         <button data-page="about" onClick={onChangePage}>about</button>
         <PageComponent/>
     </div>

    )
}


