import styled from 'styled-components';
import React from 'react'
import {GrUpdate} from "react-icons/gr"

const UpdateInfo = ({width, height}) => {
    return (
        <>
            <StyledGrUpdate width = {width} height= {height} />
        </>
    )
}

export default UpdateInfo

const StyledGrUpdate = styled(GrUpdate) `
 width: ${({width})=> width || ''};
 height: ${({height})=> height || ''}
`
   

