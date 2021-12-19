import styled from 'styled-components'

export const ServicesContainer = styled.div`
   height:1000px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items: center;
   background:#010606;
   padding:0;

   @media screen and (max-width:1000px){
       height:1300px;
   }
   @media screen and (max-width:780px){
       height:2100px;
   }
   @media screen and (max-width:480px){
       height:1200px;
   }
`;

export const ServicesWrapper = styled.div`
   max-width:1000px;
   margin-bottom:40px;
   display:grid;
   grid-template-rows:1fr 1fr;
   grid-template-columns:1fr 1fr 1fr;
   align-items: center;
   grid-gap:30px;
   padding:0 50px;

   @media screen and (max-width:1000px){
      grid-template-rows:repeat(3,1fr);
      grid-template-columns: 1fr 1fr;
   }
   @media screen and (max-width:768px){
     grid-template-rows:repeat(6,1fr);
     grid-template-columns: 1fr;
   }
`;

export const ServicesCard = styled.div`
    background:#fff;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    max-height:300px;
    padding:30px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin: 0px;


    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }

`;

export const ServicesIcon = styled.img`
     height:180px;
     width: 160px;
     margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color:#fff;
    margin-bottom:100px;

    @media screen and (max-width:700px){
        font-size:2rem;
        margin-top:0;
        margin-bottom:20px;
    }
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const ServicesP = styled.p`
   font-size:1rem;
   text-align:center;
`;