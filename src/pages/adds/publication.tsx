import { PublicationPage } from '@/components/pages/publication';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function publication() {
  return (
    <>
      <CustomHead title={Seo.Title.publication} />
      <PublicationPage></PublicationPage>
    </>
  );
}

setLayout(publication, DefaultLayout);
