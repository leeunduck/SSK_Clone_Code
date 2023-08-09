import { ContactPage } from '@/components/pages/contact';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function contact() {
  return (
    <>
      <CustomHead title={Seo.Title.contact} />
      <ContactPage></ContactPage>
    </>
  );
}

setLayout(contact, DefaultLayout);
