import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import WelcomePage from "./WelcomePage";
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation'
import HomeScene from './home/HomeScene'
import MineScene from './mine/MineScene'
import NearByScene from './nearBy/NearByScene'
import OrderScene from './order/OrderScene'
import HomePage from "./HomePage";
import color from '../../util/color'

 export default  class Root extends Component{
         render(){
            return <Navigator/>
         }
 }
const Tab=TabNavigator({
        Home:{
            screen:HomeScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:"首页",
                tabBarIcon:({focused,tintColor})=>{
                    <TabBarBottom
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("../../img/tabbar/tabbar_homepage.png")}
                        selectedImage={require("../../img/tabbar/tabbar_homepage_selected.png")}
                    />
                }
            })
        },
        NearBy:{
            screen:NearByScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:"附近",
                tabBarIcon:({focused,tintColor})=>{
                    <TabBarBottom
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("../../img/tabbar/tabbar_discover.png")}
                        selectedImage={require("../../img/tabbar/tabbar_discover_selected.png")}
                    />
                }
            })
        },
        Order:{
            screen:OrderScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:"订单",
                tabBarIcon:({focused,tintColor})=>{
                    <TabBarBottom
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("../../img/tabbar/tabbar_order.png")}
                        selectedImage={require("../../img/tabbar/tabbar_order_selected.png")}
                    />
                }

            })
        },
        Mine:{
            screen:MineScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:"我的",
                tabBarIcon:({focused,tintColor})=>{
                    <TabBarBottom
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("../../img/tabbar/tabbar_mine.png")}
                        selectedImage={require("../../img/tabbar/tabbar_mine_selected.png")}
                    />
                }
            })
        }
    },
    {
        tabBarPosition:'bottom',
        lazy:true,
        swipeEnabled:false,
        animationEnabled:false,
        tabBarOptions:{
            activeTintColor:color.primary,
            inactiveTintColor:color.gray,
            style:{
                backgroundColor:"#ffffff"
            }
        }
    }
);
 const Navigator=StackNavigator(
     {
         Welcome:{screen:WelcomePage, navigationOptions:{header:null,}},
         Tab:{screen:Tab}
     },
     {
         initialRouteName:'Welcome',//显示默认的界面
         navigationOptions:{
             headerBackTitle: null,
             headerTintColor: '#333333',
             showIcon: true,
             // header:null
         },
         mode:'card'
     }
 )