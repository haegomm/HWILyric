import React from 'react'
import { DataVisualizeBlockStyle } from '../../styles/DataVisualizeStyle'

function DataVisualizeBlock() {
  return (
    <DataVisualizeBlockStyle>
      <p>첫번째</p>
          <span> 
            <a href='#second'> → </a> 
          </span>
    </DataVisualizeBlockStyle>
  )
}

export default DataVisualizeBlock
