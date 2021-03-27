import React, {useState, useEffect} from 'react'
import {
    Container,
    Content,
    Text,
    Header,
    Left,
    Body,
    Title,
    Right,
    Icon
} from 'native-base'

import categoriesAPI from '../apis/Categories'

export default function HomeScreen({navigation}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        categoriesResponse()
    }, [])

    const categoriesResponse = async() =>{
        const response = await categoriesAPI.get('subcats');
    }
    // function getNewsFromApi(){
    //     newAPI.get('top-headlines?country=us&apiKey=c9b21c440f76435ba36297880df2b759')
    //     .then(function(response){
    //         setNews(response.data.articles)
    //         console.log(news) 
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }

    // if(!categories){
    //     return null;
    // }
    
    return(
        <Container>
                <Header>
                    <Left style={{flex:0.1}} />
                    <Body style={{flex: 1, alignItems: 'center'}}>
                        <Title>Home</Title>
                    </Body>
                    <Right style={{flex: 0.1}} />
                </Header>
            <Content
                contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>Home Screen</Text>
            </Content>
        </Container>
    );
}

