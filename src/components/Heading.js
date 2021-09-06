import styled, { css} from 'styled-components';


export const Heading = ({type, children, ...restProps})=> {
    if(type==='h1') {
        return  <H1 {...restProps}>{children}</H1>
    }
    if(type==='h2') {
        return  <H2 {...restProps}>{children}</H2>
    }
    if(type==='h3') {
        return  <H3 {...restProps}>{children}</H3>
    }
    if(type==='h4' || !type) {
        return  <H4 {...restProps}>{children}</H4>
    }
 
}

const baseStyle = css `
text-align:center;
color: ${({color})=>color||  "#705C53" };
text-transform: uppercase;
padding-left:1rem;
padding-right: 1rem;
margin: 1rem;

`

export const H1 = styled.h1 `
${baseStyle};
font-size: 2.3rem;

`
export const H2 = styled.h2 `
${baseStyle};
font-size: 1.8rem;

`
export const H3 = styled.h3 `
${baseStyle};
font-size: 1.5rem;

`
export const H4 = styled.h4 `
${baseStyle};
font-size: 1.05rem;

`
export const H5 = styled.h5 `
${baseStyle};
font-size: 1.02rem;

`

