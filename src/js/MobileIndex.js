import React from 'react'
import MobileHeader from './components/MobileHeader'
import MobileFooter from './components/MobileFooter'

class MobileIndex extends React.Component {
    render() {
        return (
           <div>
               <MobileHeader></MobileHeader>
               <MobileFooter></MobileFooter>
           </div>
        )
    }
}

export default MobileIndex;