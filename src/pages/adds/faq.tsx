import { FaqPage } from '@/components/pages/faq';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function faq() {
  return (
    <>
      <CustomHead title={Seo.Title.faq} />
      <FaqPage></FaqPage>
    </>
  );
}

setLayout(faq, DefaultLayout);
