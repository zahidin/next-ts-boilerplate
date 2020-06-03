This folder for middleware hoc protectedPage

example protectedPage.tsx for protect page component user must be loggedin

```javascript
import React from 'react';
import { NextPage } from 'next';
import Login from '@app/login';
import { checkingToken } from '@util/token';
import { Context } from '@/types/middleware/protectedPage';

export default function protectedPage(WrappedComponent: NextPage) {
  const protectedPage = (props) => {
    const statusAuth: boolean = checkingToken();
    if (!statusAuth) {
      return (
        <>
          <Login {...props} />
          <WrappedComponent {...props} />;
        </>
      );
    }
    return <WrappedComponent {...props} />;
  };

  protectedPage.getInitialProps = async (ctx: Context) => {
    // const auth: boolean = checkingToken();
    // ctx.auth = auth;

    // const pageProps =
    //   WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return {
      pageProps: WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx)),
      // statusAuth: auth,
    };
  };
  return protectedPage;
}
```
