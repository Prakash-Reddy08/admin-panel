import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
    return (
        <Wrapper>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    Home content
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
    }
`


export default Home