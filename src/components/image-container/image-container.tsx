import { Container } from '../components-index';

interface iProps {
  src: string;
  style?: Object;
}
export default function ImageContainer(props: iProps): JSX.Element {
  return (
    <Container style={props.style}>
      <img src={props.src} alt='' />
    </Container>
  );
}
