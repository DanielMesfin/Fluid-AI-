import HomePage from "./pages/homePage";
import styled from "styled-components";
const PageWrapper = styled.div`
  // height: 100vh;
  background: linear-gradient(
    135deg,
    #080808ff,
    #080808ff,
    #080808ff,
    #080808ff
  );
  // background: radial-gradient(
  //   circle,
  //   #080808ff,
  //   #080808ff,
  //   #080808ff #bbc969ff,
  //   #080808ff,
  //   #080808ff #080808ff,
  //   #080808ff
  // );

  // display: flex;
  // justify-content: center;
  // align-items: center;
  // color: white;
`;
function App() {
  return (
    <PageWrapper>
      <HomePage />
    </PageWrapper>
  );
}

export default App;
