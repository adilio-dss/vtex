import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    section {
        height: 100vh;
        width: 100%;
        background: #1C1C1C;
        display: flex;
        

        .product-content{
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 8px;
            margin-top: 120px;
            margin-left: 25px;
        }

        .logo{
            height: 40px;
            width: 40px;
            padding: 8px;
            margin-top: 10px;
            margin-left: 10px;
        }
    }

    button{
            background-color: #4CAF50;
            border-radius: 12px;
            border-color: #fff;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 12px;
        }
`