import React, { useState } from 'react'
import Style from '../dropdown/style/Style.module.css'


export default function DropDown() {

   const [selectedValue, setSelectedValue] = useState(false);
   const [value,setValue]=useState()
  const list = ['Yes', "No"]
  const handleClick = (e)=>{
    setValue(e)
    setSelectedValue(false)
  }
  const handleHover = ()=>{
    setSelectedValue(true)
    console.log(selectedValue)
  }
  const handleMouseLeave =()=>{
    setSelectedValue(false)
    console.log(selectedValue)
  }
  return (
    <div className={Style.dropdown} >
      <div className={Style.main}>
        <h4>Should You Use Drop Down ?</h4>
        <div class={Style.dropdownBox}>
          <button onMouseEnter={()=>handleHover() }  onMouseLeave={()=>handleMouseLeave()} class={Style.dropbtn}>{value ? value:"Select ?"}</button>
       {selectedValue?
          <div  onMouseEnter={()=>handleHover() } onMouseLeave={()=>handleMouseLeave()} class={Style.dropdownContent}>
            {list.map((li)=>(
              <div onClick={()=>handleClick(li)}  className={Style.optBox}><p >{li}</p></div>)
            )}
          
          </div>:""}
        </div>
      </div>

    </div>
  )
}
