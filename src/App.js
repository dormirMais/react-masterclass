import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const rotationAnimation = keyframes`
    0%{
        transform:rotate(0deg);
        border-radius: 10px;
    }50%{
        transform:rotate(360deg);
        border-radius: 100px
    }100%{
        transform:rotate(0deg);
        border-radius: 10px;
    }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
