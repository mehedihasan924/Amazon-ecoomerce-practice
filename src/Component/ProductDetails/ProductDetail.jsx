import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const productData=useLoaderData()
        const  ShowData=productData;
    console.log(ShowData)

    // const quiz = useLoaderData();
    // const quizData = quiz.data.questions;
    // console.log(quizData);

    return (
        <div>
            <h1>Product Details</h1>
       
        </div>
    );
};

export default ProductDetail;