import { ReactElement } from 'react';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { CustomHead } from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function value() {
  return (
    <>
      <CustomHead title={Seo.Title.value} />
    </>
  );
}

value.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
