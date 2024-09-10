import styled from 'styled-components';
import bgTop from '../assets/bg-pattern-top.svg';
import bgBottom from '../assets/bg-pattern-bottom.svg';
import bgCard from '../assets/bg-pattern-card.svg';
import profileImage from '../assets/image-profile.jpg';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100vw;
  background-color: hsl(184, 73%, 39%);
  background-image: url(${bgTop}), url(${bgBottom});
  background-position: -50% 170%, 130% -150%; /* Centro de bgTop en la esquina superior izquierda, centro de bgBottom en la esquina inferior derecha */
  background-repeat: no-repeat;
  background-size: 980px 980px, 980px 980px; /* Tamaño de las imágenes de fondo */
    @media (max-width: 375px) {
    background-position: top left, bottom right; /* Reposiciona las imágenes de fondo */
    background-position: 200% -100%, -100% 200%; 
    background-size: 500px 500px, 500px 500px; /* Reduce el tamaño de las imágenes en pantallas pequeñas */
  }
`;
const Card = styled.div`
  background-color: white;
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-bottom: 20px;
  overflow: hidden;
  
`;

const CardBackground = styled.div`
  background-image: url(${bgCard});
  background-size: cover;
  height: 140px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  margin-top: -50px;
`;

const Title = styled.h1`
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: hsl(231, 12%, 21%);
  margin: 10px 0 5px;
    span {
    color: hsl(240, 0%, 49%);
    font-weight: 400;
  }
`;

const Subtitle = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: hsl(240, 0%, 49%);
  margin-bottom: 20px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid hsl(240, 0%, 80%);
  padding-top: 20px;
`;

const Stat = styled.div`
  font-family: 'Kumbh Sans', sans-serif;
  color: hsl(231, 12%, 21%);
`;

const StatNumber = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

const StatLabel = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: hsl(240, 0%, 49%);
`;

const ProfileCard = () => {
  return (
    <PageWrapper>
      <Card>
        <CardBackground />
        <ProfileImage src={profileImage} alt="Profile" />
        <Title>Victor Crest <span>26</span></Title>
        <Subtitle>London</Subtitle>
        <Stats>
          <Stat>
            <StatNumber>80K</StatNumber>
            <StatLabel>Followers</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>803K</StatNumber>
            <StatLabel>Likes</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>1.4K</StatNumber>
            <StatLabel>Photos</StatLabel>
          </Stat>
        </Stats>
        </Card>
    </PageWrapper>
  );
};

export default ProfileCard;
