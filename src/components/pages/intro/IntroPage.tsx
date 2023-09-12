import styled from 'styled-components';
import { Colors } from '@/styles';
import { Fonts } from '@/styles';
import Image from 'next/image';

export const IntroPage = () => {
  const handlePdfButton = () => {
    window.location.href =
      'https://ssk-production.s3.ap-northeast-2.amazonaws.com/adds/Yonsei-ADDS.pdf';
  };

  return (
    <Intro>
      <IntroLayout>
        <IntroTitle>
          <div>
            <h1>ADDS 소개</h1>
          </div>
        </IntroTitle>
        <IntroContainer>
          <IntroSubtitle>
            <div>
              <p>ADDS</p>
              <p>Alpha generation Digital Daily Survey</p>
            </div>
          </IntroSubtitle>
          <IntroContent>
            <ContentTitle>
              <p>알파 세대에 대한 새로운 이해의 필요성</p>
            </ContentTitle>
            <div>
              <ContentBox>
                <div>
                  <div>
                    <p>
                      알파세대의 시작,
                      <br />
                      그리고 COVID_19 팬데믹
                    </p>
                  </div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>언택트 세대</td>
                        </tr>
                        <tr>
                          <td>초연결 세대</td>
                        </tr>
                        <tr>
                          <td>멀티페르소나 세대</td>
                        </tr>
                        <tr>
                          <td>영상 세대</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                        <tr>
                          <td>비대면 선호도 증가</td>
                        </tr>
                        <tr>
                          <td>24시간 정보, 또래관계 연결</td>
                        </tr>
                        <tr>
                          <td>복수의 디지털 정체성</td>
                        </tr>
                        <tr>
                          <td>시각적 정보에 민감</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentBox>
              <ContentBox>
                <div>
                  <div>
                    <p>
                      피할 수 없는 디지털 전환시대,
                      <br />
                      새로운 이론/교육/서비스 필요
                    </p>
                  </div>
                  <div>
                    <div>
                      <div>e세대 새로운 디지털 일상</div>
                      <div>새로운 a 교육</div>
                      <div>새로운 a 정책, 서비스</div>
                    </div>
                  </div>
                </div>
              </ContentBox>
            </div>
            <CircleContainer>
              <Circle>
                <div></div>
              </Circle>
            </CircleContainer>

            <ContentTitle>
              <p>연도별 조사 실시 계획</p>
            </ContentTitle>

            <IntroPlan>
              <div>
                <Image src='/assets/intro_plan.png' alt='introplan' width={960} height={460} />
              </div>
            </IntroPlan>

            <ContentTitle>
              <p>소개 자료</p>
            </ContentTitle>

            <IntroButton>
              <div>
                <button type='button' onClick={handlePdfButton}>
                  <p>YONSEI ADDS PDF</p>
                </button>
              </div>
            </IntroButton>
          </IntroContent>
        </IntroContainer>
      </IntroLayout>
    </Intro>
  );
};

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 1rem 0;
  position: relative;
`;

const Circle = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 40rem;
  border: 3px solid #d9d9d9;
  position: absolute;
  z-index: -1;
`;

const IntroPlan = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    display: flex;

    > img {
      width: 100%;
      height: auto;
    }
  }
`;

const ContentTitle = styled.div`
  display: inline-flex;
  padding: 0.3rem 1.6rem;
  align-items: center;
  gap: 1rem;
  margin: 5rem 0rem;
  border-left: 6px solid var(--blue-3-point, ${Colors.blue300});

  > p {
    ${Fonts.bold20}
  }
`;
const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  >div: nth-child(2) {
    display: flex;
    gap: 1rem;
    margin: 5rem 0rem;
    justify-content: center;
  }
`;
const ContentBox = styled.div`
  display: flex;
  width: 38rem;
  height: 28.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);

  > div {
    display: flex;
    flex-direction: column;

    > div: first-child {
      display: flex;
      width: 38rem;
      height: 9.3rem;
      padding: 1.5rem 5rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: ${Colors.blue200};

      > p {
        line-height: 140%;
        ${Fonts.bold20}
      }
    }
  
    > div: nth-child(2) {
      display: flex;
      padding-bottom: 0rem;
      flex-direction: row;
      align-items: center;
      height: 20rem;
      background-color: white;
      justify-content: center;

      > table {
        display: flex;
        flex-direction: column;
        gap: 3rem;
          
          > tbody {
            display: flex;
            gap: 1rem;
            flex-direction: column;

            > tr {
              padding: 0.5rem;
              
            > td {
              padding: 0.3rem;
            }
            }
          }
        }

      > div {
        display: flex;
        gap: 3rem;
        flex-direction: column;
        
        > div {
          ${Fonts.medium16}
        }
      }
      }
          }
      }
    }
}
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
`;

const IntroLayout = styled.div`
  display: flex;
  border: solid 1px blue;
  flex-direction: column;
  width: 120rem;
  justify-content: center;
`;

const IntroContainer = styled.div`
  display: flex;
  width: 120rem;
  // gap: 4rem;
  // justify-content: center;
  display: flex;
  flex-grow: 1;
  height: 17rem;
  flex-direction: column;
  height: 160rem;
  border: solid 1px blue;
`;
const IntroTitle = styled.div`
  display: flex;
  height: 12rem;
  align-items: center;
  justify-content: left;
  flex-direction: row;

  > div {
    > h1 {
      ${Fonts.regular40}
    }
  }
`;

const IntroSidebar = styled.div`
  display: flex;
  width: 17rem;
  height: 100rem;
  border: solid 1px blue;
`;

const IntroSubtitle = styled.div`
  display: flex;
  background-image: url('/assets/pattern_blue.png');
  height: 17rem;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
  text-align: center;
  align-items: center;
  justify-content: center;

  > div {
    > p:first-child {
      ${Fonts.bold34}
      margin-bottom: 1.5rem;
    }

    >p: last-child {
      ${Fonts.regular30}
    }
  }
`;
const IntroButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    width: 18rem;
    height: 4rem;
    display: flex;

    > button {
      width: 100%;
      height: 100%;
      background-color: ${Colors.blue300};
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 0.6rem;

      > p {
        text-align: center;
        ${Fonts.bold16};
      }
    }
  }
`;
