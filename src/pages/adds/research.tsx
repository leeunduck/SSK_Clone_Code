import { ResearchPage } from '@/components/pages/research';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function research() {
  return (
    <>
      <CustomHead title={Seo.Title.research} />
      <ResearchPage></ResearchPage>
    </>
  );
}

setLayout(research, DefaultLayout);
