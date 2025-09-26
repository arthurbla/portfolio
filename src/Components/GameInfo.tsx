import React from "react";
import { styled } from "styled-components";
import { Game as GameInterface } from "../types";
import LogoButton from "./LogoButton";
import { Column, Row } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
  max-width: 800px;
  width: 100%;
    padding: 20px;
`;

const GameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color: #00ced1;
  margin-top: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;
    

    @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoTable = styled(Column)`
  gap: 5px;
  margin: 20px 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoRow = styled(Row)`
  gap: 8px;
`;

const InfoKey = styled.span`
  font-weight: bold;
  min-width: 70px;
  text-align: left;
    
`;

const InfoValue = styled.span`
  color: silver;
`;

const ContributionsContainer = styled(Column)`
  gap: 5px;
`;

const ContributionItem = styled.span`
  color: silver;
  display: block;
  margin-left: 78px; /* Align with other info values */

  @media (max-width: 768px) {
    margin-left: 78px;
  }
`;

const LinksContainer = styled(Row)`
  gap: 10px;
`;

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
    return (
        <GameInfoContainer>
            <GameTitle>{game.name}</GameTitle>
            <GameDescription>{game.description}</GameDescription>

            <InfoTable>
                <InfoRow>
                    <InfoKey>Genres:</InfoKey>
                    <InfoValue>{game.genre}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Role:</InfoKey>
                    <InfoValue>{game.role}</InfoValue>
                </InfoRow>

                {game.source && <InfoRow>
                    <InfoKey>Source:</InfoKey>
                    <InfoValue >
                        <a href={game.source.url} target="_blank" rel="noopener noreferrer">
                            {game.source.name}
                        </a>
                    </InfoValue>
                </InfoRow>}
                {/*<InfoRow>*/}
                {/*    <InfoKey>Contribution:</InfoKey>*/}
                {/*</InfoRow>*/}
                {/*<ContributionsContainer>*/}
                {/*  {game.contribution.map((contribution, index) => (*/}
                {/*    <ContributionItem key={index}>• {contribution}</ContributionItem>*/}
                {/*  ))}*/}
                {/*</ContributionsContainer>*/}
            </InfoTable>
            
        </GameInfoContainer>
    );
};

export default GameInfo;
