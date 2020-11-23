import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import GeneralStyles from '../../theme/GeneralStyles';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Colors from '../../theme/Colors';
import Strings from '../../strings/Strings';
import TodoTasksList from '../tasks/TodoTasksList';
import DoneTasksList from '../tasks/DoneTasksList';

function MainScreen(props) {
  return (
    <View style={GeneralStyles.whiteBackground}>
      <ScrollableTabView
        tabBarActiveTextColor={Colors.primary}
        tabBarInactiveTextColor={Colors.grey}
        tabBarUnderlineStyle={{backgroundColor: Colors.primary}}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar />}>
        <TodoTasksList
          navigation={props.navigation}
          tabLabel={Strings.txtTodo}
        />
        <DoneTasksList
          navigation={props.navigation}
          tabLabel={Strings.txtDone}
        />
      </ScrollableTabView>
    </View>
  );
}

export default connect(null, null)(MainScreen);
