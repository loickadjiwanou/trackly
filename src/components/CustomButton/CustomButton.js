import React from "react";
import CustomButtonStyle from "./CustomButton.style.js";
import { Button } from "@rneui/themed";

const CustomButton = (props) => {
  return (
    <Button
      title={props.title}
      uppercase={props.uppercase}
      radius={props.radius}
      size={props.size}
      titleStyle={[CustomButtonStyle.titleStyle, { color: props.titleColor }]}
      type={props.type}
      raised={props.raised}
      buttonStyle={[
        CustomButtonStyle.buttonStyle,
        {
          borderWidth: 1,
          borderRadius: props.borderRadius || 10,
          borderColor: props.borderColor,
          height: props.buttonHeight || 55,
        },
      ]}
      disabled={props.isDisabled}
      disabledStyle={{
        backgroundColor: props.disabledBackgroundColor,
        borderColor: props.disabledBorderColor,
      }}
      color={props.color}
      loading={props.loading}
      loadingProps={{ size: props.loaderSize, color: props.loaderColor }}
      onPress={props.handlePress}
    />
  );
};
export default CustomButton;
