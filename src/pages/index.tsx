import Home from '@app/home';
import HomeLayout from '@layouts/home';

function IndexPage(props) {
  return (
    <HomeLayout>
      <Home {...props} />
    </HomeLayout>
  );
}

export default IndexPage;
