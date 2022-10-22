import './Container.css';

const Container = ({ children, modifier = '', style = {}, onClick }) => {
  return (
    <div className={`Container ${modifier}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
