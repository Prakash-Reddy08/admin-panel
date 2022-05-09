import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Wrapper>
            <div className='navbar'>
                <div className="wrap">
                    <div className="search">
                        <input type="text" id='search' placeholder="Search..." />
                        <label htmlFor="search">
                            <SearchOutlinedIcon />
                        </label>
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageOutlinedIcon className='icon' />
                        </div>
                        <div className="item">
                            <DarkModeOutlinedIcon
                                className="icon"
                            />
                        </div>
                        <div className="item">
                            <FullscreenExitOutlinedIcon className="icon" />
                        </div>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon" />
                            <div className="counter">1</div>
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className="icon" />
                            <div className="counter">2</div>
                        </div>
                        <div className="item">
                            <ListOutlinedIcon className="icon" />
                        </div>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.navbar{
        height: 50px;
        border-bottom: 0.5px solid rgb(231, 228, 228);
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #555;
        .wrap{
            width: 100%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .search {
                display: flex;
                align-items: center;
                border: 0.5px solid lightgray;
                padding: 3px;
                label{
                    display:flex;
                }
                input {
                    border: none;
                    outline: none;
                    background: transparent;

                    &::placeholder {
                    font-size: 12px;
                    }
                }
            }
            .items {
                display: flex;
                align-items: center;

                .item {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    position: relative;

                    .icon {
                    font-size: 20px;
                    }

                    .avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    }

                    .counter {
                    width: 15px;
                    height: 15px;
                    background-color: red;
                    border-radius: 50%;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    font-weight: bold;
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    }
                }
            }
        }
        
    }
`

export default Navbar