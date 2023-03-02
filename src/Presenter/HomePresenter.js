import styled from 'styled-components';

const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
`

const Loader = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-weight: 300;
`

const Movies = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(400px, 1fr));
grid-gap: 100px;
padding: 50px;
width: 80%;
padding-top: 70px;

@media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    width: 100%;
}
`

export { Container, Loader, Movies, }