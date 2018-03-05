import React,{Component } from 'react'
import Swiper from 'react-native-swiper'
import {StackNavigator,TabNavigator, TabBarBottom,NavigationActions} from 'react-navigation'
import AsyncStorage from '../../util/StorageUtils'
import {
    Platform,
    StyleSheet,
    View,
    Navigator,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

export default class WelcomePage extends Component {
    isFirst=false;
    _pressed=(e)=>{

    }

    componentDidMount() {
        if (!this.isFirst){
            this.time=setTimeout(()=>{
                this.props.navigation.dispatch(resetAction);
            },3000);
        }
    }
    componentWillUnmount() {
        this.time&&clearTimeout(this.time);
    }

    render(){

       AsyncStorage.getItem("isFirst",(error,text)=>{
           if (text==null||text==''){
               this.isFirst=true;
           }else {
               this.isFirst=false;
           }
       });

        if (this.isFirst){
            return (<Swiper
                dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                activeDot={<View style={{backgroundColor: '#007aff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}

                onIndexChanged={(index)=>{
                    // if (index==2){
                    //    this.props.navigation.dispatch(resetAction);
                    // }
                }}
                paginationStyle={{
                    bottom: 70
                }}
                loop={false}
                    >
                <TouchableHighlight   style={styles.slide}>
                    {/*cover:等比拉伸 strech:保持原有大小  contain:图片拉伸  充满空间*/}
                    <Image style={styles.img} source={require('../../img/1.jpg')}
                    />
                </TouchableHighlight  >
                <TouchableHighlight   style={styles.slide}>
                    <Image style={styles.img} source={require('../../img/2.jpg')}/>
                </TouchableHighlight  >
                <TouchableHighlight   style={styles.slide}  onPress={(e)=>{
                    this.props.navigation.dispatch(resetAction);
                }} >
                    <Image style={styles.img} source={require('../../img/3.jpg')}
                    />
                </TouchableHighlight  >
            </Swiper>);
        }else {
            return <View style={styles.slide} >
                <Image style={styles.img} source={require('../../img/4.jpg')}/>
            </View>
        }

    }
}
const styles =StyleSheet.create({
    slide:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    img:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'stretch',
    }

});
// 通过reset实现返回时直接退出，而不是进入欢迎页
const resetAction = NavigationActions.reset({ index:0,
    actions: [NavigationActions.navigate({ routeName: 'Tab'})]
});
