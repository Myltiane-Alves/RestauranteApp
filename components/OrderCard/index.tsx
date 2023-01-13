import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import DetailsIcon from "../Icons/DetailsIcon";
import ShareIcon from "../Icons/ShareIcon";
import { CardControls } from "./CardControls";
import { CardControlsButton } from "./CardControlsButton";
import { CardDetail } from "./CardDetail";
import { CardDetails } from "./CardDetails";
import { CardText } from "./CardText";
import { CardTextID } from "./CardTextID";
import { CardTitle } from "./CardTitle";
import { CardWrap } from "./CardWrap";

type OrderCardProps = {
    id: number;
    total: number;
    items: number;
};

const formatId = (id: string) => {
    const ID_MAX_LENGHT = 9;
  
    if (id.length >= ID_MAX_LENGHT) {
      return id.substring(0, ID_MAX_LENGHT);
    }
  
    return id.padStart(ID_MAX_LENGHT, '0');
};

const OderCard = ({id, total,  items }: OrderCardProps) => {
    return (
        <CardWrap>
            <CardTextID>#{formatId(String(id))}</CardTextID>
            <CardDetails>
                <CardTitle>Detalhes do Pedido</CardTitle>
                <CardDetail>
                    <CardTitle>Data:</CardTitle>
                    <CardText>01/01/2023</CardText>
                </CardDetail>

                <CardDetail>
                    <CardText>Valor:</CardText>
                    <CardText>Total</CardText>
                </CardDetail>

                <CardDetail>
                    <CardText>Itens:</CardText>
                    <CardText>{items}</CardText>
                </CardDetail>

                <CardDetail>
                    <CardText>Nº:</CardText>
                    <CardText>{formatId(String(id))}</CardText>
                </CardDetail>


            </CardDetails>

            <CardControls>
                <CardControlsButton>
                    <ShareIcon />
                </CardControlsButton>
                <CardControlsButton>
                    <DetailsIcon />
                </CardControlsButton>
                <CardControlsButton>
                    <DeleteIcon />
                </CardControlsButton>
            </CardControls>
        </CardWrap>
    )
}

export default OderCard;