import styled from 'styled-components';
import Chart from '../../components/Chart';
import Featured from '../../components/Featured';
import List from '../../components/List';
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
                    <div className="charts">
                        <Featured />
                        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                    </div>
                    <div className="listContainer">
                        <div className="listTitle">Latest Trans</div>
                        <List />
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
        .widgets,.charts{
            display:flex;
            flex-wrap:wrap;
            padding: 20px;
            gap: 20px;
        }
        .charts{
            padding:5px 20px;
        }
        .listContainer{
            -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
            box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
            padding: 20px;
            margin: 20px;

            .listTitle {
                font-weight: 500;
                color: gray;
                margin-bottom: 15px;
            }
        }
    }
`


export default Home