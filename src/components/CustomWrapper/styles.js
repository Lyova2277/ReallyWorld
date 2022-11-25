import styled from 'styled-components';

export const CustomWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding-top: ${({ paddingTop }) => paddingTop};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  grid-template: repeat(${({ gridTemplate }) => gridTemplate}) / repeat(${({ gridTemplate }) => gridTemplate});
  gap: ${({ gap }) => gap};
`;
