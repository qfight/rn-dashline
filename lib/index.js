/**
 * @file
 * @author zdying
 */

'use strict';

import {View, Platform} from 'react-native';

export default ({color = 'black', backgroundColor = 'white', lineWidth = 1, style = {}}) => {
  let wrapperStyle = {
    height: lineWidth,
    overflow: 'hidden'
  };
  let lineStyle = {
    height: 0,
    borderColor: color,
    borderWidth: lineWidth,
    borderStyle: 'dashed'
  };
  let lineMask = {
    marginTop: -lineWidth,
    height: lineWidth,
    backgroundColor: backgroundColor
  };

  return (
    <View style={[wrapperStyle, style]}>
      <View style={lineStyle} />
      {Platform.OS === 'android' ? <View style={lineMask} /> : null}
    </View>
  );
};
