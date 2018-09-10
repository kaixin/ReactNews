import React from 'react'
import PCHeader from './components/PCHeader'
import PCFooter from './components/PCFooter'
import PCNewsContainer from './components/PCNewsContainer'

class PCIndex extends React.Component {
    render() {
        return (
           <div>
               <PCHeader></PCHeader>
               <PCNewsContainer></PCNewsContainer>
               <PCFooter></PCFooter>
           </div>
        )
    }
}

export default PCIndex;