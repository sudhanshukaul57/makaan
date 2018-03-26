import {MINVALUE,MAXVALUE} from '../utils/Constants'
export const apiBuilder=(baseUrl,endUrl,fields,filters,status,bedroomFilter,minBudget,maxBudget,page)=>{
    filters.push({"cityId": 11})
    filters.push({ "listingCategory": status })    
    
    let indices=[]
    if(bedroomFilter.indexOf(true)) {
        for(i=0;i<5;i++) {
            if(bedroomFilter[i])
                indices.push(i)
        }
    }
    if(indices.length>1)
        filters.push({"bedrooms":indices})
    else if(indices.length===1)
        filters.push({"bedrooms":indices[0]})

    for (i = 0; i < filters.length; i++) {
        filters[i] = { "equal": filters[i] }
    }
    if(minBudget!=MINVALUE || maxBudget!=MAXVALUE)
        filters.push({"range":{"price":{"from":minBudget,"to":maxBudget}}})

    filters=JSON.stringify(filters)
    let url = `${baseUrl}?selector={"fields":${JSON.stringify(fields)},"filters":{"and":${filters}},"paging":{"start":${page},"rows":20}}${endUrl}`
    return url
}