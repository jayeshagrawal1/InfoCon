import React from 'react'
import Atcoder from '../images/Atcoder.jpg'
import CodeChef from '../images/CodeChef.jpg'
import CodeForces from '../images/CodeForces.jpg'
import Google from '../images/Google.jpg'
import LeetCode from "../images/LeetCode.png"
import HackerEarth from "../images/HackerEarth.png"
import HackerRank from "../images/HackerRank.png"
const Card = ({contest}) => {

    function ImageFinder(image)
    {
        if(image.toLowerCase().includes('atcoder'))
            return Atcoder;
        else if(image.toLowerCase().includes('codechef'))
            return CodeChef;
        else if(image.toLowerCase().includes('codeforces'))
            return CodeForces;
        else if(image.toLowerCase().includes('google'))
            return Google;
        else if(image.toLowerCase().includes('hackerearth'))
            return HackerEarth;
        else if(image.toLowerCase().includes('hackerrank'))
            return HackerRank;
        else
            return LeetCode;
    }

  return (
    <div className='w-[300px] bg-bgDark opacity-80 rounded-md overflow-hidden hover:scale-105 transition duration-300 ease-in'>
        {
            <img src={ImageFinder(contest.site)} alt={contest.site}/>
        }
        <div  className='p-4 flex flex-col gap-1 items-start '>
            <p className='text-white font-semibold text-lg leading-6'>
                {
                    contest.name.length>40?(contest.name.substr(0,40))+"...":(contest.name)
                }
            </p>
            <div>
                <span className='mt-2 text-white'>Date:</span>
                <span className='mt-2 text-[#b0bfdc] ml-3'>
                    {
                        contest.start_time.includes(' ')?
                        contest.start_time.split(' ')[0]:
                        contest.start_time.split('T')[0]
                    }
                </span>
            </div>
            
            <div>
                <span className='mt-2 text-white'>Duration:</span>
                <span className='mt-2 text-[#b0bfdc] ml-3'>
                    {
                        ((contest.duration)/(60*60)).toFixed(2)
                    }
                    hr
                </span>
            </div>
            
            <div>
                <span className='mt-2 text-white'>In 24 hours:</span>
                <span className='mt-2 ml-3 text-[#b0bfdc]'>{contest.in_24_hours}</span>
            </div>
            
            <button className='mt-4 text-white bg-bgDark2 text-lg px-2 py-1 rounded-md font-medium hover:bg-opacity-50 transition-all duration-300'>
                <a href={contest.url} target='_blank'>Visit Here</a>
            </button>
        </div>
    </div>
  )
}

export default Card

