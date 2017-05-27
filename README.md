# DashLine
React Native虚线组件（兼容Android）

# 为什么要有这个组件

目前，在Android上给某一边设置虚线，显示是不正常的。所以开发这个组件，去实现一条虚线。

**注意**： 目前只实现水平方向的虚线，如果有需要实现垂直方向的虚线，欢迎PR。

# 安装

```bash
npm install react-native-dashline --save
```

# 使用

```js
import DashLine from 'react-native-dashline';

export default ({}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {/* other components */}
      <DashLine style={{flex: 1, margin: 5}} lineWidth={2} />
    </View>
  )
}
```

## License

[MIT License](https://raw.githubusercontent.com/qfight/react-native-dashline/master/LICENSE)