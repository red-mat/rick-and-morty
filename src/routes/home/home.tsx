import './home.css';

import {
  Container,
  CharacterList,
  LoadingScreen,
} from '../../components/index';

import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

interface iProps {
  characterList: iCharacterApiResult[];
  setImageURL: (arg0: string) => void;
  isLoading: boolean;
}
function Home({ characterList, setImageURL, isLoading }: iProps): JSX.Element {
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Container>
      <CharacterList characterList={characterList} cardClick={setImageURL} />
    </Container>
  );
}

export default Home;
