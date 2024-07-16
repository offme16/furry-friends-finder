import { createSlice } from '@reduxjs/toolkit';
import { Donations, DonationsFeedSchema } from '../type/type';
import { getDonations } from '../service/getDonations';

const initialState:DonationsFeedSchema = {
    result: [],
    error: '',
    isLoading: false,
    busket: [],
    page: 1,
    limit: 6,
};

export const DonationsFeedSlice = createSlice({
    name: 'Donations',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        increaseDonationCount: (state, action) => {
            state.result = state.result?.map((donateItem) => {
                if(donateItem.id === action.payload.id){
                    if(donateItem.count === 0){
                        state.busket?.push({...donateItem, count: donateItem.count + 1})
                    }
                    else{
                        state.busket = state.busket?.map((busketItem) => {
                            if(busketItem.id === donateItem.id){
                                return {...busketItem, count: busketItem.count + 1}
                            }
                            else return busketItem
                        })
                    }
                    return {...donateItem, count: donateItem.count + 1};
                }
                else{
                    return donateItem
                }                   
            })
        },
        decreaseDonationCount: (state, action) => {
            state.result = state.result?.map((donateItem) => {
                if(donateItem.id === action.payload.id && donateItem.count > 0){
                    return {...donateItem, count: donateItem.count - 1};
                }
                return donateItem                  
            })
            state.busket = state.busket?.map((busketItem) => {
                if(busketItem.id === action.payload.id && busketItem.count > 0){
                    return {...busketItem, count: busketItem.count - 1};
                }
                return busketItem
                                   
            })
            state.busket = state.busket?.filter(busketItem => busketItem.count > 0)
        },
        removeItem: (state, action) => {
            state.result = state.result?.map(donationItem => {
                if(donationItem.id === action.payload.id){
                    console.log({...donationItem, count: 0})
                    return {...donationItem, count: 0};
                }
                return donationItem     
            })
            state.busket = state.busket?.filter(busketItem => busketItem.id !== action.payload.id)
        },
        dropBusket: (state) => {
            state.busket = [];
            state.result = state.result?.map( donation => {return {...donation,  count: 0} });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDonations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getDonations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.result = action.payload.map((donationItem : Donations) => {
                    state.busket?.forEach((busketItem: Donations) => {
                        if(donationItem.id == busketItem.id){
                            donationItem.count = busketItem.count;
                        }
                    });
                    return donationItem;
                });
            })
            .addCase(getDonations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: DonationsFeedSliceActions } = DonationsFeedSlice;
export const { reducer: DonationsFeedSliceReducer } = DonationsFeedSlice;