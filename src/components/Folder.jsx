import { useState } from "react"
import { AiFillFolder } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'
import { BiSolidDownArrow } from 'react-icons/bi'

function Folder({ name, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const childrenStyle = { 'marginLeft': '17px', 'display': isOpen ? 'block' : 'none' }

    function handleFolderClick() {
        setIsOpen((curr) => !curr)
    }
    return (
        <div>
            <div onClick={handleFolderClick} style={{ 'cursor': 'pointer', 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                {isOpen ? <AiFillFolderOpen color="#1E79C9" size={20} />
                    : <AiFillFolder color="#1E79C9" size={20} />
                }
                <BiSolidDownArrow  size={12}/>
                <span>{ name }</span>
            </div>
            <div style={childrenStyle}>
                {children}
            </div>
        </div>
    )
}

export default Folder