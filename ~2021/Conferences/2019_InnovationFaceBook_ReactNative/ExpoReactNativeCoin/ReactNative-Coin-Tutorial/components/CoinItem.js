import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends React.Component {
    render() {
        let date = new Date();
        let now = date.toLocaleString();

        return (
            <View style={styles.container}>
                <Image
                    style = {{width: 50, height: 50, marginRight: 5, marginLeft: 5}}
                    source = {{uri: this.props.iconUri}}
                />
                <View style={{flexDirection: 'row', alignSelf:'stretch', alignItems:'center',
            justifyContent:'space-between', flex:1}}>
                    <View>
                    <Text style={[styles.text, { flex :1}]}>{this.props.name || 'Name'}</Text>
                    <Text style={[styles.text, { flex :1}]}>{'Volume'+ (this.props.volumn || 0)}</Text>
                    <Text style={[styles.text, { flex :1}]}>{'Price: ' + (this.props.price || 0)}</Text>
                    </View>
                    <Text style={[styles.text]}>{'#' + (this.props.rank || 'Rank')}</Text>
                </View>
                
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor :'white',
        alignItems:'center',
        // justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth:1,
        borderBottomColor: 'lightgrey',
    },
    text:{
        color:'black'
    }
});


export default CoinItem;