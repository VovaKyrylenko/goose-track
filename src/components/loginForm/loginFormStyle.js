import styled from '@emotion/styled';

export const Box = styled.div`
  width: 100%;
  background-color: #dcebf7;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Container = styled.form`
  margin: 202px 20px;
  border-radius: 8px;
  padding: 40px;

  background-color: #fff;
  width: 335px;
  display: flex;
  flex-direction: column;
`;

export const ScreenName = styled.h2`
  color: #3e85f3;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const Label = styled.label`
  color: #3e85f3;
`;

export const Button = styled.button`
display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 18px;
  }
`;