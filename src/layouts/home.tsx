import { HomeProps } from '@type';

function LayoutHome(props: HomeProps) {
  return (
    <>
      <div className="my-3 py-3">
        <div className="container px-3">{props.children}</div>
      </div>
    </>
  );
}

export default LayoutHome;
