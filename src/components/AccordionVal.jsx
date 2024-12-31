import React, { useState } from 'react'

const AccordionVal = ({title,code,strong}) => {
    const [accordion, setAccordion] = useState(false)
    return (
        <div onClick={() => setAccordion(!accordion)} className='w-full md:w-[85%] border-[.5px] border-[#33353d] my-1 bg-[#ffffff05] rounded-[13px] flex flex-wrap items-center justify-between cursor-pointer p-2'>
            <span className={`${accordion?'text-orange-400':'text-white'}  w-[95%] flex items-center justify-start ps-2  tracking-wide text-[17px] duration-300`}>{title}</span>
            {accordion ? <span className=' text-[25px] text-orange-400 w-[3%] flex justify-start duration-300 ease-in-out transition-all rotate-[-45deg]'>+</span> : <span className='w-[3%] flex justify-start text-[25px] text-orange-400 duration-300 ease-in-out transition-all rotate-[0deg]'>+</span>}

            <div className={`${accordion ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} overflow-hidden grid w-full transition-all duration-300 ease-in-out`}>
                <div className={`text-white w-full overflow-hidden`}>
                    <code className='text-[#928f8f]  tracking-wider text-[15px]'>{code}</code>
                    <strong className='text-yellow-500  tracking-wider text-[14px]'>{strong}</strong>
                </div>
            </div>
        </div>
    )
}

export default AccordionVal