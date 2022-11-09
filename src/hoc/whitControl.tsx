import { useEffect } from 'react';

type Comp<t> = React.ComponentType<t>;
type hoc<t> = (props: t) => JSX.Element;

function getName<p>(C: React.ComponentType<p>): string {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing, @typescript-eslint/strict-boolean-expressions
  return C.displayName || C.name || 'Component';
}

export default function withControl<t extends Object>(C: Comp<t>): hoc<t> {
  const name = getName(C);
  function WithControl(props: t): JSX.Element {
    useEffect(() => {
      console.log('+', name);
    });

    return <C {...props} />;
  }

  return WithControl;
}
