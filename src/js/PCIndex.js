import React from 'react'
import PCHeader from './components/PCHeader'
import PCFooter from './components/PCFooter'

class PCIndex extends React.Component {
    render() {
        return (
           <div>
               <PCHeader></PCHeader>
               <PCFooter></PCFooter>
           </div>
        )
    }
}

export default PCIndex;