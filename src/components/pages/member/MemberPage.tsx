import styled from 'styled-components';
import {Fonts} from '../../../styles/fonts';

export const MemberPage = () => {
  return <MemberSection>
    <div>연구진 소개</div>
    <MemberGridBox>
      <div>
        김현경 교수
      </div>
      <div>
        김현경 교수
      </div>
      <div>
        김현경 교수
      </div>
      <div>
        김현경 교수
      </div>
      <div>
        김현경 교수
      </div>
      <div>
        김현경 교수
      </div>
      <div>
        김현경 교수
      </div>
    </MemberGridBox>
  </MemberSection>;
};

const MemberSection = styled.section`
>div{
  ${Fonts.regular30};
}
`; 

const MemberGridBox = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
>div{
  border: 1px solid black;
}
>div:nth-child(1){
grid-column: 1/span 2;
}
`; 