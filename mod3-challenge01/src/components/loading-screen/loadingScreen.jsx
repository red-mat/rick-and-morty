import './loadingScreen.css';

function LoadingScreen({ isLoading }) {
    if (isLoading) {
      return <h1 className='loading-text'>Loading...</h1>;
    }
  
    return null;
  }

  export default LoadingScreen;