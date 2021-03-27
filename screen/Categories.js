import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { 
Container, 
Icon,
Content,
Header,
Footer,
Right,
Button,
ListItem,
Left,
Thumbnail,
Body,
H3,
Text,
List,
Switch} from 'native-base';

import {
FlatList,
SafeAreaView
} from 'react-native'

import React, {useState, useEffect} from 'react'
import Animated from 'react-native-reanimated'

import categoriesAPI from '../apis/Categories'
import CategoryItem from '../components/CategoryItem2.js'
import Collapse from './TestCollapse'

function Categories({progress, ...props}){
    const translateX =  Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategoriesFromApi()
    }, [])

    // const categoriesResponse = async() =>{
    //     const response = await categoriesAPI.get('menu');
    //     console.log(response.data[0].tienes) 
    // }

    function getCategoriesFromApi(){
        categoriesAPI.get('menu')
        .then(function(response){
            setCategories(response.data[0].tienes)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    if(!categories){
        return null;
    }

    return(
        <Container>
            <Header style={{
                backgroundColor: '#ffffff',
                borderBottomWidth: 0}}>
                    <Body>
                        <Text>Menu</Text>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Right>
            </Header>
            <Collapse />
            {/* <FlatList
                data={categories}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <CategoryItem index={item} {...props}/>
                }}
            /> */}
            <Footer 
                style={{
                    backgroundColor: 'purple'
                }}
            />
        </Container>
        // <Container>
        //     <Header style={{
        //         backgroundColor: '#ffffff',
        //         borderBottomWidth: 0}}>
        //             <Right>
        //                 <Button transparent
        //                     onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        //                 >
        //                     <Icon name="menu" />
        //                 </Button>
        //             </Right>
        //     </Header>
        //     <Content
        //         contentContainerStyle={{
        //             flex:1
        //         }}
        //     >
        //         <ListItem thumbnail>
        //             <Left>
        //                 <Thumbnail 
        //                     source={{ uri: 'http://www.uatf.edu.bo/images/uatf.png'}}
        //                 />
        //             </Left>
        //             <Body>
        //                 <H3>UATF</H3>
        //                 <Text note>Tu fuente de noticias</Text>
        //             </Body>
        //         </ListItem>

        //         <DrawerContentScrollView {...props}>
        //             <Animated.View style={{transform: [{translateX}]}}>
        //             <DrawerItemList {...props} />
        //             <DrawerItem
        //                 label="Multimedia"
        //                 icon={({color,size}) => (
        //                     <Icon 
        //                     name="grade" 
        //                     style={{
        //                         fontSize:size,
        //                         color: color
        //                     }}
        //                     />
        //                 )}
        //                 onPress={()=>props.navigation.navigate('Home')}
        //             />
        //             <FlatList
        //                 data={categories}
        //                 keyExtractor={(item, index) => 'key' + index}
        //                 renderItem={({item}) => {
        //                     return <CategoryItem item={item}/>
        //                 }}
        //             />
                        
        //             </Animated.View>
        //         </DrawerContentScrollView>
        //         <List>
        //             <ListItem>
        //                 <Body>
        //                     <Text>Modo Oscuro</Text>
        //                 </Body>
        //                 <Right>
        //                     <Switch value={true} />
        //                 </Right>
        //             </ListItem>
        //         </List>
        //     </Content>
        //     <Footer 
        //         style={{
        //             backgroundColor: 'purple'
        //         }}
        //     />
        // </Container>
    )    
}

export default Categories;