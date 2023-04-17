import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";
import { FlatList } from "react-native-gesture-handler"; 
import CardPlanetas from "./CardPlanetas";

let stories = require("./temp.json");
class Inicial extends Component {
    renderItem=({item:story}) => {
        return <CardPlanetas story = {story}navigation={this.props.navigation}/>
    };

    keyExtractor = (item,index) => index.toString();

  render(){
        return(
            <View>
                <FlatList
                keyExtractor={this.keyExtractor}
            data={stories}
            renderItem={this.renderItem}/>
            </View>
        )
    }
  }
export default Inicial;

