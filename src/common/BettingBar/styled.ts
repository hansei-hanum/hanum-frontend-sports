import styled from 'styled-components';

export const BettingContainer = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: #ffffff;
    margin-top: 15px;
    font-size: 17px;
    display: flex;
    font-weight: bold;
    padding: 0 10px;
    gap: 15px;
`;

export const BettingBox = styled.input.attrs({ type: 'number' })`
    /* BettingBox의 스타일 */
    width: 100%;
    height: 50px;
    padding: 0 10px;
    color: ${(props) => (props.value ? 'rgba(0,0,0,0)' : 'rgba(0, 0, 0, 1)')};
    border: none;
    border-radius: 10px;
    background-color: #f5f5f5;
    font-size: 17px;
    font-weight: midium;

    /* placeholder의 스타일 */
    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
        content: '베팅할 금액을 입력해주세요';
    }
`;
