import styled from 'styled-components';
import Image from 'next/image';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import MembersExample from '../../../../public/assets/members_example.png';

export const MemberPage = () => {
  return (
    <MemberSection>
      <MemberLayout>
        <MemberContainer>
          <div>연구진 소개</div>
          <MemberGridBox>
            <div>
              <div>
                <Image src={MembersExample} alt='members_example' />
              </div>
              <div>
                <div>
                  <div>연구책임자</div>
                  <div>김현경 교수</div>
                  <div>
                    <div>E-mail</div>
                    <div>1234567@yonsei.ac.kr</div>
                  </div>
                  <div>
                    <div>홈페이지</div>
                    <div>www.yonsei.ac.kr</div>
                  </div>
                  <div>
                    <div>연락처</div>
                    <div>010-0000-0000</div>
                  </div>
                </div>
                <div>
                  연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수 <br />
                  청소년, 바이오마커 수집, 양적 연구 설계 전문성
                </div>
              </div>
            </div>
            <div>김현경 교수</div>
            <div>김현경 교수</div>
            <div>김현경 교수</div>
            <div>김현경 교수</div>
          </MemberGridBox>
        </MemberContainer>
      </MemberLayout>
    </MemberSection>
  );
};

const MemberSection = styled.section`
  width: 100%;
`;
const MemberLayout = styled.div`
  width: 120rem;
  margin: 0 auto;
`;
const MemberContainer = styled.div`
  > div:first-child {
    ${Fonts.regular40};
    height: 13.4rem;
    display: flex;
    align-items: center;
  }
`;

const MemberGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem 2rem;
  width: 98rem;
  > div {
    box-shadow: 0 0.2rem 1rem 0 ${Colors.memberShadow};
    width: 48rem;
    height: 36rem;
  }
  > div:first-child {
    grid-column: 1 / span 2;
    width: 90rem;
    height: 33rem;
    margin: 0 0 2rem 0;
    overflow: hidden;
    display: flex;
    > div:first-child {
      width: 35%;
      > Img {
        object-fit: cover;
        width: 100%;
      }
    }
    > div:not(:first-of-type) {
      width: 75%;
      > div {
        width: 100%;
      }
      > div:nth-child(1) {
        height: 70%;
        > div:nth-child(1) {
          ${Fonts.regular18};
        }
      }
      > div:nth-child(2) {
        display: flex;
        align-items: center;
        padding: 0 0 0 3rem;
        background-color: ${Colors.blue100};
        height: 30%;
        ${Fonts.regular18}
        line-height: 2.6rem;
      }
    }
  }
`;
