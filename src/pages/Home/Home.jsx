import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';

const Home = () => {
    return (
        <Wrapper>
            <div className='home'>
                <Sidebar />
                <div className="homeContainer">Container</div>
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