import { Container } from '../index';

interface iProps {
  src: string;
}
export default function ImageContainer(props: iProps): JSX.Element {
  return (
    <Container>
      <img src={props.src} alt='' />
    </Container>
  );
}
