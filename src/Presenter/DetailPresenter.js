import styled from 'styled-components';

const Loader = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: 300;
`

const DetailBox = styled.div`
background-color: white;
margin-left: 30px;
margin-right: 30px;
font-weight: 300;
padding: 20px;
border-radius: 5px;
color: #adaeb9;
text-decoration: none;
color: inherit;
`

const DetailContents = styled.div`
display: flex;
`

const DetailImg = styled.img`
background-color: white;
position: relative;
margin-right: 30px;
`

const DetailTitle = styled.h1`
font-weight: 500;
text-decoration: none;
> a {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
    text-decoration: none;
}
`

const DetailYear = styled.h2`
font-weight: 400;
text-decoration: none;
margin-right: 10px;
`

const DetailParagraph = styled.p`
margin: 0;
margin-top: 20px;
margin-bottom: 20px;
font-weight: 300;
text-decoration: none;
font-size: 18px;
> h3 {
    margin: 0 0 7px 0;
    font-weight: 500;
    font-size: 25px;
}
`

const DetailGenres = styled.ul`
padding: 0;
list-style: none;
> h3 {
    margin: 0 0 7px 0;
    font-weight: 500;
    font-size: 25px;
}
`

export { Loader, DetailBox, DetailContents, DetailImg, DetailTitle, DetailParagraph, DetailYear, DetailGenres, }