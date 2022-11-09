import React from 'react';

interface iProps<P, T> {
  component: React.ComponentType<P>;
  dataList: T[];
  handleProps: (arg0: T) => P;
  handleClick?: (arg0?: T) => void;
}

export default function CardList<P extends object, Td>({
  component: C,
  dataList,
  handleClick,
  handleProps,
}: iProps<P, Td>): JSX.Element {
  return handleClick !== undefined ? (
    <>
      {dataList.map((c, i) => (
        <div key={i} onClick={() => handleClick(c)}>
          <C {...handleProps(c)} />
        </div>
      ))}
    </>
  ) : (
    <>
      {dataList.map((c, i) => (
        <div key={i}>
          <C {...handleProps(c)} />
        </div>
      ))}
    </>
  );
}
