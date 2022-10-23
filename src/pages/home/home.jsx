import './home.css';

import {
  Container,
  CharacterList,
  LoadingScreen,
} from '../../components/components-index';

function Home({ characterList, setImageURL, isLoading }) {
  return isLoading ? (
    <LoadingScreen isLoading={isLoading} />
  ) : (
    <Container>
      <CharacterList characterList={characterList} cardClick={setImageURL} />
    </Container>
  );
}

export default Home;
