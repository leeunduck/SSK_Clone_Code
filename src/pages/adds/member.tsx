import { MemberPage } from '@/components/pages/member';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { CustomHead } from '../../components/seo/CustomHead';
import { Seo } from '../../constants/seo';

export default function member() {
  return (
    <>
      <CustomHead title={Seo.Title.member} />
      <MemberPage></MemberPage>
    </>
  );
}

setLayout(member, DefaultLayout);
