import styled, { css } from "styled-components";

const StyleCard = styled.div`
    position: relative;
`;
const CardImage = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 8px;
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0%;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`;
const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333;
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;
`;
const CardAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #ff8c00 64.35%, #FC2872 119.91%);
    ${(props) => props.secondary && css`
        background: linear-gradient(86.88deg, #6aff72, #288bfc);
    `};
    color: transparent;
    --webkit-background-clip: text;
    background-clip: text;
`;
const CardHeart = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;
const CardHeartImg = styled.img`
    width: 20px;
    height: 20px;
`;

const Card = (props) => {
    return (<StyleCard>
        <CardImage>
            <CardImg src="https://cdn.dribbble.com/userupload/33476220/file/original-d4ca59ef4ed0cbb2bb3600be756e5d74.png?resize=1024x768&vertical=center" alt="" />
        </CardImage>
        <CardContent>
            <CardTop>
                <CardUser>
                    <UserAvatar src="https://cdn.dribbble.com/userupload/33476220/file/original-d4ca59ef4ed0cbb2bb3600be756e5d74.png?resize=1024x768&vertical=center" alt="" />
                    <UserName>@keymagic</UserName>
                </CardUser>
                <CardHeart>
                    <CardHeartImg src="/heart_833472.png" alt="heart" />
                    <span>256</span>
                </CardHeart>
            </CardTop>
            <CardFooter>
                <CardTitle>Cosmic Perspective</CardTitle>
                <CardAmount secondary={props.secondary}>12,000 PSL</CardAmount>
            </CardFooter>
        </CardContent>
    </StyleCard>);
}

export default Card;