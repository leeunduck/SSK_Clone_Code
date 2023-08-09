import { NewsPage } from '@/components/pages/news';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function news() {
  return (
    <>
      <CustomHead title={Seo.Title.news} />
      <NewsPage></NewsPage>
    </>
  );
}

setLayout(news, DefaultLayout);
