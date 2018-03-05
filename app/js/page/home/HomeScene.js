import React,{PureComponent} from 'react'
import {
        StyleSheet,
        ScrollView,Text,
        TouchableOpacity,View,
        ListView,StatusBar,FlatList,Image
} from 'react-native'
import {Heading2,Heading3,Paragraph} from '../../../widget/Text'
import screen from '../../../util/screen'


import NavigationItem from '../../../widget/NavigationItem'

type Props = {
    navigation: any,
}

type State = {
    discounts: Array<Object>,
    dataList: Array<Object>,
    refreshing: boolean,
}

export default class HomeScene extends PureComponent<Props,State>{
    static navigationOptions  =({navigation}:any)=>({
        headerTitle:(<TouchableOpacity style={styles.searchBar}>
                            <Image source={require('../../../img/home/search_icon.png')} style={styles.searchIcon}/>
                            <Paragraph>一点点</Paragraph>
                      </TouchableOpacity>
        ),
        headerRight:(
            <NavigationItem icon={require('../../../img/home/search_icon.png')}
                             onPress={()=>{

                             }}
                        />
        ),
        headerLeft:(
            <NavigationItem title='福州'
                            titleStyle={{color:'white'}}
                            onPress={()=>{

                            }}/>
        ),
        headerStyle: {backgroundColor: '#06C1AE'},
    });
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(){
        return<Text>主页</Text>
    }

}
const styles=StyleSheet.create({
    searchBar:{
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon:{
        width: 20,
        height: 20,
        margin: 5,
    }

});