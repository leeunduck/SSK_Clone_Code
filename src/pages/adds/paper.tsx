import { PaperPage } from '@/components/pages/paper';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function paper() {
  return (
    <>
      <CustomHead title={Seo.Title.paper} />
      <PaperPage></PaperPage>
    </>
  );
}

setLayout(paper, DefaultLayout);
