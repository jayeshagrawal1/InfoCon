import React from 'react'
import Card from './Card';

const Cards = ({ Contests, Platform }) => {

  let contestPlatform = Platform.toLowerCase();
  // console.log(Platform);

  const getContests = () => {

    if (Platform === "All") {
      // console.log(Contests);
      return Contests;
    }
    else {
      let contests = [];
      Object.values(Contests).forEach((con) => {
        let platform = con.site.toLowerCase();
        if (platform.includes(contestPlatform))
          contests.push(con);
      })
      // console.log(1);
      // console.log(contests);
      return contests;
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 mt-3'>
      {
        getContests().length !== 0 ? getContests().map((cont, index) => {
          return <Card key={index}
            contest={cont} />
        }) : <div className='text-white text-2xl '>No Data Found</div>


      }
    </div>
  )
}

export default Cards