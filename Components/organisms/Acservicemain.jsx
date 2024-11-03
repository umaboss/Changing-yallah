import React from 'react'
import Container from '../atoms/Container'
import Acbanner from '../moleculus/Acbanner'
import AcAll from './AcAll'
import Servicenow from '../moleculus/Servicenow'

function Acservicemain() {
  return (
    <div>
      {/* <Acbanner/> */}
      <AcAll />
      <Servicenow />
    </div>
  )
}

export default Acservicemain