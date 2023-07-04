import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { API_URL,filterData } from "./data";
import { toast } from "react-toastify";
const App = () => {

  const [contest,setContest]=useState([]);
  const [loading,setLoading]=useState(true);

  const [platform,setPlatform]=useState(filterData[0].title);

  async function fetchData(){
    try{
      const res=await fetch (API_URL);
      const output=await res.json();

      console.log(output);

      setContest(output);
    }
    catch(error)
    {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return <>
    <div className="min-h-screen flex flex-col bg-bgDark2">

        <Navbar />
      
          <Filter filterData={filterData} platform={platform} setPlatform={setPlatform} />

        <div className="">
          {
    
            <div className="w-11/12 max-w-[1260px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
            {
              loading? (<Spinner/>):(<Cards Contests={contest} Platform={platform}/>)
            }
            </div> 
          }

        </div>

      <Footer />  
        
    </div>
  </>;
};

export default App;
