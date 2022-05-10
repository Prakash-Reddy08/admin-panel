import styled from 'styled-components'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Wrapper>
            <div className="sidebar">
                <div className="top">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="logo">Admin</span>
                    </Link>
                </div>
                <hr />
                <div className="center">
                    <ul>
                        <p className="title">MAIN</p>
                        <Link to="/" style={{ textDecoration: "none" }}>

                            <li>
                                <DashboardIcon className="icon" />
                                <span>Dashboard</span>
                            </li>
                        </Link>
                        <p className="title">LISTS</p>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                            <li>
                                <PersonOutlineIcon className="icon" />
                                <span>Users</span>
                            </li>
                        </Link>
                        <Link to="/products" style={{ textDecoration: "none" }}>
                            <li>
                                <StoreIcon className="icon" />
                                <span>Products</span>
                            </li>
                        </Link>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Orders</span>
                        </li>
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>Delivery</span>
                        </li>
                        <p className="title">USEFUL</p>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneIcon className="icon" />
                            <span>Notifications</span>
                        </li>
                        <p className="title">SERVICE</p>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>System Health</span>
                        </li>
                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>Logs</span>
                        </li>
                        <li>
                            <SettingsApplicationsIcon className="icon" />
                            <span>Settings</span>
                        </li>
                        <p className="title">USER</p>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <p className="title">THEME</p>
                    <div className='options'>
                        <div className="colorOption"></div>
                        <div className="colorOption"></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex:1;
    border-right : 0.5px solid rgb(230,227,227);
    min-height:100vh ;
    background-color:#ffffff;
    .top{
        height:50px;
        display:flex;
        align-items: center;
        justify-content:center;
        .logo{
            font-size:20px;
            font-weight: bold;
            color:#6439ff;
        }
    }

    hr{
        height:0px;
        border:0.5px solid rgb(230,227,227);
    }

    .center{
        padding-left:10px;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            .title {
                font-size: 10px;
                font-weight: bold;
                color: #999;
                margin-top: 15px;
                margin-bottom: 5px;
            }

            li {
                display: flex;
                align-items: center;
                padding: 5px;
                cursor: pointer;

                &:hover {
                background-color: #ece8ff;
                }

                .icon {
                font-size: 18px;
                color: #7451f8;
                }

                span{
                    font-size: 13px;
                    font-weight: 600;
                    color: #888;
                    margin-left: 10px;
                }
            }
        }
    }

  .bottom{
      display: flex;
      align-items: flex-start;
      margin: 10px;
      flex-direction:column;
      .title {
                font-size: 10px;
                font-weight: bold;
                color: #999;
                margin-top: 15px;
                margin-bottom: 5px;
            }
    .options{
        display:flex ;

        .colorOption{
            width: 20px;
            height: 20px;
            border-radius: 5px;
            border: 1px solid #7451f8;
            cursor: pointer;
            margin: 5px;

            &:nth-child(1){
                background-color: whitesmoke;
            }
            &:nth-child(2){
                background-color: #333;
            }
        }
  }
}
`
export default Sidebar