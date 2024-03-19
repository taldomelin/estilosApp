import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar,Image} from "react-native";

interface Item {
    id: string,
    nome: string,
    idade: string,
    email: string,
}

const dados: Item[] = [
    {id:"1" , nome: "João", idade:"16" , email: "joao@teste.com"},
    {id:"2" , nome: "Enzo", idade:"16" , email: "enzo@teste.com"},
    {id:"3" , nome: "Gustavo", idade:"17" , email: "gustavo@teste.com"},
    {id:"4" , nome: "João", idade:"16" , email: "joao@teste.com"},
    {id:"5" , nome: "Enzo", idade:"16" , email: "enzo@teste.com"},
    {id:"6" , nome: "Gustavo", idade:"17" , email: "gustavo@teste.com"},
    {id:"7" , nome: "João", idade:"16" , email: "joao@teste.com"},
    {id:"8" , nome: "Enzo", idade:"16" , email: "enzo@teste.com"},
    {id:"9" , nome: "Gustavo", idade:"17" , email: "gustavo@teste.com"},
    {id:"10" , nome: "João", idade:"16" , email: "joao@teste.com"},
    {id:"11" , nome: "Enzo", idade:"16" , email: "enzo@teste.com"},
    {id:"12" , nome: "Gustavo", idade:"17" , email: "gustavo@teste.com"},
];


const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
)


function FlatListEXample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/home.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/orders.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/profile.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )       
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth:0.2,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10
    },
    footerIcon: {
        width:30,
        height:30
    }
});

export default FlatListEXample;