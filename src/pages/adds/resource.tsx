import { ResourcePage } from '@/components/pages/resource';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function resource() {
  return (
    <>
      <CustomHead title={Seo.Title.resource} />
      <ResourcePage></ResourcePage>
    </>
  );
}

setLayout(resource, DefaultLayout);
