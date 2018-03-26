import React, { Component } from 'react'
import {View,
        FlatList
} from 'react-native'
import ListingHeader from '../component/ListingHeader'
import FilterHeader from '../component/FilterHeader'
import ListingCard from '../component/ListingCard'
import {BUY,MINVALUE,MAXVALUE,BASE_URL,END_URL,FIELDS,FILTERS} from '../utils/Constants'
import {apiBuilder} from '../api/APIBuilder'
var url=null
export default class ListingScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            status:BUY,
            bedroomFilter:[false],
            minBudget:MINVALUE,
            maxBudget:MAXVALUE,
            page:0,
            listingDetails: []
        }
    }
    static navigationOptions = {
        header: null,
    };
    
    listingType=(status)=>{
       this.setState({
           status:status,
           page:0
        })
        this.loadUsers()
    }

    filters=(bedroomFilter,minValue,maxValue) =>{
        this.setState({
            bedroomFilter:bedroomFilter,
            minBudget:minValue,
            maxBudget:maxValue,
            page:0
        })
    }
    
    loadUsers = () => {
        const { listingDetails, page } = this.state;
        this.setState({ isLoading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    listingDetails: page === 0 ? res.data[0].facetedResponse.items : [...listingDetails, ...res.data[0].facetedResponse.items]
                });
            })
            .catch(err => {
                console.error(err);
            });
    };

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 20
        }, () => {
            this.loadUsers();
        });
    };

    componentDidMount() {
        console.log("hello")
        this.loadUsers();
    };

    render() {
        const { listingDetails } = this.state;
        var {status}=this.state
        var { bedroomFilter } = this.state
        var { minBudget } = this.state
        var { maxBudget } = this.state
        let {page}=this.state
        var count=0
        let fields=[]
        if(bedroomFilter.indexOf(true)>=0)
            count++
        if(minBudget!=MINVALUE || maxBudget!=MAXVALUE)
            count++
        if(count==0)
            count='NOT APPLIED'        
        console.log(status)
        console.log(bedroomFilter)
        console.log(minBudget)
        console.log(maxBudget)
        url=apiBuilder(BASE_URL,END_URL,FIELDS,fields,status,bedroomFilter,minBudget,maxBudget,page)
        console.log(url)
        return (
            <View>
                <ListingHeader/>
                <FilterHeader onPress={()=> this.props.navigation.navigate('Filters',this.filters)} listingType={this.listingType} count={count}/>
                <FlatList
                    data={listingDetails}
                    renderItem={({ item }) => (
                        <ListingCard/>
                    )}
                    keyExtractor={(i, index) => '' + index}
                    onEndReached={this.handleLoadMore}
                    onEndThreshold={0}
                />
            </View>
        )
    }
}