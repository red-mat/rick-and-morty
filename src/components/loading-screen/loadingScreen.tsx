import './loadingScreen.css';

interface iProps {
  isLoading: boolean;
}
function LoadingScreen({ isLoading }: iProps): JSX.Element | null {
  if (isLoading) {
    return <h1 className='loading-text'>Loading...</h1>;
  }

  return null;
}

export default LoadingScreen;
