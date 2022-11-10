import './home.css';

import {
  CardList,
  Container,
  ImageContainer,
  LoadingScreen,
} from '../../components/index';

import useCharacterContext from '../../state_management/character-context/character-hook';
import { withLink } from '../../hoc/withLink';
import useCharacters from '../../modules/rick_and_morty_api/hooks/characters';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

const Card = withLink(ImageContainer);

function Home(): JSX.Element {
  const [characters, loading] = useCharacters();
  const { selectCharacter } = useCharacterContext();

  return loading ? (
    <LoadingScreen />
  ) : (
    <Container modifier='container--character-list'>
      <CardList
        component={Card}
        dataList={characters}
        handleProps={c => ({ href: '#header', src: c.image })}
        handleClick={c => selectCharacter(c as iCharacterApiResult)}
      />
    </Container>
  );
}

export default Home;
