import styled from 'styled-components';

const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
`;

const HeaderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  z-index: 10;
`;

const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 30px;
  justify-content: center;
  align-items: center;
  margin: 0px 30px 0px 30px;
  background-color: #f1f2f3;
  padding: 0 12px;
  border-radius: 4px;
`;

const FooterButtonWrapper = styled.View`
  position: absolute;
  bottom: 36px;
  width: 100%;
  height: 54px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const FooterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 80%;
  height: 38px;
  justify-content: center;
  align-items: center;
  background-color: #5f00ff;
  margin: 10px;
  border-radius: 8px;
`;

const FooterButtonText = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 16px;
`;

export {
  ScreenWrapper,
  HeaderButtonWrapper,
  HeaderButton,
  FooterButtonWrapper,
  FooterButton,
  FooterButtonText,
};
