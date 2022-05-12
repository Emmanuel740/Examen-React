import React from 'react';
import {gql, useQuery} from '@apollo/client';

const GET_DOG_PHOTO = gql` query Dog($breed: String!) {dig(breed:$breed) {id displayImage}}`

export function DogPhoto(breed){

    const {loading, error, data } = useQuery(GET_DOG_PHOTO,{
        variables:{breed},
    })

    if(loading) return null;
    if(error) return `Error! ${error}`

    return (
        <React.Fragment>
            <img src={data.dog.displayImage} style={{
                height: 100,
                width: 100
            }}/>
        </React.Fragment>
    )
}
