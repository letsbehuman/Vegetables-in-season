import React from "react";
import Card from "./Card";

const CardList = ({vegetables})=>{

        return(
            <div>
                {vegetables.map((vegetable, i)=>{
                return (
                <Card 
                    key={i} 
                    id={vegetables[i].id} 
                    name={vegetables[i].name} 
                    type={vegetables[i].type}
                    season={vegetables[i].season} 

                        />
                    );
                })
            }
            </div>
        );
}

export default CardList;