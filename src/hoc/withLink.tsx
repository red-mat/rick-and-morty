import React from 'react';

type tComp<P> = React.ComponentType<P>;
type tHoc<P> = (props: tHocProps<P>) => JSX.Element;
interface iHocProps {
  href: string;
}
type tHocProps<P> = iHocProps & P;

export function withLink<P extends Object>(C: tComp<P>): tHoc<P> {
  function WithLink({ href, ...props }: tHocProps<P>): JSX.Element {
    return (
      <a href={href}>
        <C {...(props as unknown as P)} />
      </a>
    );
  }
  return WithLink;
}
