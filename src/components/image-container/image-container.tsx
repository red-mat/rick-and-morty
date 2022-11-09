import './image-container.css';
import { Container } from '../index';

interface iProps {
  src: string;
  alt?: string;
  modifier?: string;
}
export default function ImageContainer({
  src,
  alt,
  modifier,
}: iProps): JSX.Element {
  return (
    <Container modifier={modifier}>
      <img className='container__img' src={src} alt={alt} />
    </Container>
  );
}
