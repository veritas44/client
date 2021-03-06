import React, { Component } from "react";
import { View, Platform } from "react-native";
import { Touchable } from "@toxclient/shathui";

import Colors from "./../styles/colors";

const DEFAULT_SIZE = 36;
const DEFAULT_ICON_SIZE = 24;
const DEFAULT_ICON_PACK = "material";
const SCALE_RATIO = DEFAULT_SIZE / DEFAULT_ICON_SIZE;

export class UserButton extends Component {
  render() {
    const { name, title, size, color, pack, onPress } = this.props;
    const iconPack = pack ? pack : DEFAULT_ICON_PACK;

    const Icon =
      iconPack === "community"
        ? require("react-native-vector-icons/MaterialCommunityIcons").default
        : require("react-native-vector-icons/MaterialIcons").default;

    const sizeStyle = size
      ? {
          width: size * SCALE_RATIO,
          height: size * SCALE_RATIO,
          borderRadius: size * SCALE_RATIO * 2
        }
      : null;

    return (
      <View style={[styles.container, sizeStyle]}>
        <Touchable onPress={onPress}>
          <View style={[styles.ripple, sizeStyle]}>
            <Icon
              name={name}
              size={size || DEFAULT_ICON_SIZE}
              color={color || Colors.ICONS}
              style={styles.icon}
              title={title}
            />
          </View>
        </Touchable>
      </View>
    );
  }
}

export default UserButton;

const styles = {
  container: {
    width: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
    borderRadius: DEFAULT_SIZE,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        cursor: "pointer"
      },
      default: {
        //elevation: 2
      }
    })
  },
  ripple: {
    width: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
    borderRadius: DEFAULT_SIZE,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    ...Platform.select({
      web: {
        userSelect: "none",
        cursor: "pointer"
      }
    })
  }
};
