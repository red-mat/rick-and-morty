import './Container.css';

const Container = ({ children, containerModifier={} }) => {
  return (
    <div className='Container' style={containerModifier}>
      {children}
    </div>
  );
};

export default Container;
