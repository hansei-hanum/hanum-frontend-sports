import React, { useState } from 'react';
import * as S from './styled';
import sendIcon from '../../../assets/icons/sendIcon.png';

interface ChattingBoxProps {
    onCommentSubmit: (newComment: string) => void;
}

export const ChattingBox: React.FC<ChattingBoxProps> = ({ onCommentSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSendClick = () => {
        onCommentSubmit(inputValue);
        setInputValue('');
    };

    return (
        <S.ChatContainer>
            <S.WriteChatContainer>
                <S.WriteBox type="text" placeholder="메세지 보내기" value={inputValue} onChange={handleInputChange} />
                <img src={sendIcon} width={30} onClick={handleSendClick} />
            </S.WriteChatContainer>
        </S.ChatContainer>
    );
};
