import { connect } from "react-redux";

import { toggleTheme } from "../state/ducks/themes/actions";

import Container from "../styled/Container";
import FlexBetween from "../styled/FlexBetween";
import StyledHeader from "../styled/StyledHeader";
import DarkModeButton from "../styled/DarkModeButton";

Header.defaultProps = {
  onClickDarkModeButton: () => console.warn("Unimplemented onClickDarkModeButton")
}

export function Header({ onClickDarkModeButton }) {
  return (
    <StyledHeader>
        <Container>
            <FlexBetween>
                <h2>Where in the world?</h2>
                <DarkModeButton onClick={onClickDarkModeButton}>☽ Dark Mode</DarkModeButton>
            </FlexBetween>
        </Container>
    </StyledHeader>
  );
}

const mapDispatchToProps = {
  onClickDarkModeButton: toggleTheme
}

export default connect(null, mapDispatchToProps)(Header)
