import React from 'react';
import './Container.css';

type Props = Partial<iProps>;
interface iProps {
  children: React.ReactNode;
  modifier: string;
  style: React.CSSProperties;
  onClick: () => void;
}

function Container({
  children,
  modifier = '',
  style = {},
  onClick = () => {},
}: Props): JSX.Element {
  return (
    <div className={`Container ${modifier}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
}

export default Container;
