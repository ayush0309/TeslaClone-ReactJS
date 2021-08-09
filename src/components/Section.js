import React from 'react'
import styled from 'styled-components'

function Section(props) {
    return (
        <Container backgroundImg={props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
                <LeftButton>{props.leftBtnText}</LeftButton>
                <RightButton>{props.rightBtnText}</RightButton>
            </Buttons>
            <ArrowDown src="/images/down-arrow.svg"/>
        </Container>
    )
}

export default Section

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('/images/${props.backgroundImg}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`

const Buttons = styled.div`
    display:flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const ArrowDown = styled.img`
    height: 40px;
    margin-bottom: 20px;
    animation: animateDown infinite 1.5s;
`