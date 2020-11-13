import React from "react";
import {
  Button,
  ButtonProps,
  Icon,
  SemanticICONS,
  StrictButtonProps
} from "semantic-ui-react";

type Props = StrictButtonProps & {
  icon: SemanticICONS;
};

//doesn't even need to be used

class IconButton extends React.Component<ButtonProps & Props> {
  render() {
    return (
      <Button>
        {/*comment out line 21 to see difference in performance*/}
        <Icon name={this.props.icon} />
      </Button>
    );
  }
}

export default IconButton;
