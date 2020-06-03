import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configStore } from '../redux/configureStore';
import '@styles/index.scss';

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  render() {
    const store = configStore();
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Boilerplate Next js</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
export default MyApp;
