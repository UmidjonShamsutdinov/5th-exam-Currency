import React from 'react'
import "./Loading.scss"

import { LineWave, Oval } from 'react-loader-spinner'

const Loading = ({type}) => {
  return ( type === 1 ?
    <div className='loading'>
        <LineWave
            className='loading1'
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor="red"
            middleLineColor="blue"
            lastLineColor="yellow"
            />        
    </div> :
    <div className='loading2'>
        <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}

        />
    </div>
  )
}

export default Loading