import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/Widget';

const Home = () => {
    return (
        <Wrapper>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="widgets">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earnings" />
                        <Widget type="balance" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .home{
        display: flex;
        .homeContainer{
            flex:6; 
        }
        .widgets{
            display:flex;
            flex-wrap:wrap;
            padding: 20px;
            gap: 20px;
        }
    }
`


export default Home