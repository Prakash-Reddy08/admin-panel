import styled from 'styled-components'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {

    let data;

    // tempdata
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className='icon' style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }} />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon' style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                }} />
            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                }} />
            }
            break;
        default:
            break;
    }

    return (
        <Wrapper>
            <div className='widget'>
                <div className="left">
                    <div className="title">{data.title}</div>
                    <div className="counter">{data.isMoney && "$"} {amount}</div>
                    <div className="link">{data.link}</div>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpIcon />
                        {diff}%
                    </div>
                    {data.icon}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        flex: 1;
        min-width: 160px;
        .widget{
            display: flex;
            justify-content: space-between;
            padding: 10px;
            -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
            box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
            border-radius: 10px;
            height: 100px;
        
        .left,.right{
            display: flex;
            flex-direction:column;
            justify-content: space-between ;

            .title{
                font-weight: bold;
                font-style: 14px;
                color:rgb(160,160,160);
            }
            .counter{
                font-style: 28px;
                font-weight: 300;
            }
            .link {
                width: max-content;
                font-size: 12px;
                border-bottom: 1px solid gray;
            }

            .percentage {
                display: flex;
                align-items: center;
                font-size: 14px;

                &.positive {
                    color: green;
                }
                &.negative {
                    color: red;
                }
            }

            .icon {
                font-size: 18px;
                padding: 5px;
                border-radius: 5px;
                align-self: flex-end;
            }
        }
    }

`

export default Widget