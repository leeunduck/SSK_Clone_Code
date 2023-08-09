import { NoticePage } from '@/components/pages/notice';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function notice() {
  return (
    <>
      <CustomHead title={Seo.Title.notice} />
      <NoticePage></NoticePage>
    </>
  );
}

setLayout(notice, DefaultLayout);
