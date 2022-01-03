import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CoinItem from '../components/CoinItem';
import { getCoinIconUri } from '../libs/Constants';

class CoinView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            coinDatas: [],
            isLoaded:false,
        };
    }

    _getCoinDatas = async (limit)=>{

            this.setState({
                isLoading: true,
            });

            try{
                const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
                const responseJson = await response.json();

                const date = new Date();
                const now = date.toLocaleString();

                if(this.props.refreshDate != null){
                    this.props.refreshDate(now);
                }

                await this.setState({
                    coinDatas: responseJson,
                    isLoading: false,
                });
            }
            catch(error) {
                console.error('_getCoinDatas', error);
            }

    }

    componentDidMount() {
        this._getCoinDatas(10);

        setInterval(()=>{
            this._getCoinDatas(10);
            console.log('toggled!');
        }, 10000);
    }

    render() {
        let coinItems = this.state.coinDatas.map((data, index) =>{
            const { rank, name, price_usd, market_cap_usd, time} = data;
            return (
                <CoinItem
                    key={index}
                    rank={rank}
                    name={name}
                    price={price_usd}
                    volumn={market_cap_usd}
                    iconUri={getCoinIconUri(name)}
                />
            );
        });  
    // let coinItems = [];

    // for (var i = 0; i < sampleData.length; i++) {
    //   let data = sampleData[i];
    //   let CoinItem = (
    //     <CoinItem
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volumn={data.market_cap_usd}
    //     />
    //   )
    //   coinItems.push(CoinItem);
    // }    

        return (
            <ScrollView style={this.props.style}>
                {coinItems}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'skyblue',
        // justifyContent:'center',
        // alignItems:'center',
    },
});

export default CoinView;